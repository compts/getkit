/* eslint-disable no-undef */
import {dummyCrypto, dummyEventsEmitter} from '../lib/dummyReqNodeWs.js';

import {isEmpty} from 'structkit';

class WebSocketClient extends dummyEventsEmitter {

    constructor (socket, url) {

        super();
        this.url = url;
        // This.url = new URL(url);
        this.socket = null;
        this.socketExport = socket;
        this.isSecure = socket.isHttps;
        this.port = url.port || (socket.isHttps
            ? 443
            : 80);
        this.handshakeCompleted = false;

    }

    connect () {

        const options = {
            "host": this.url.hostname,
            "port": this.port,
            "servername": this.url.hostname
        };

        console.log(options, "this.options");
        this.socket = this.socketExport.connect(options);

        this.socket.on('connect', () => this._handleConnect());
        this.socket.on('data', (data) => this._handleData(data));
        this.socket.on('close', () => this.emit('close'));
        this.socket.on('error', (err) => this.emit('error', err));

    }

    _handleConnect () {

        // Generate random key for handshake
        this.key = dummyCrypto().randomBytes(16)
            .toString('base64');
        const pathname = isEmpty(this.url.pathname)
            ? '/'
            : this.url.pathname;
        const search = isEmpty(this.url.search)
            ? ''
            : this.url.search;

        const headers = [
            `GET ${pathname}${search} HTTP/1.1`,
            `Host: ${this.url.hostname}`,
            'Upgrade: websocket',
            'Connection: Upgrade',
            `Sec-WebSocket-Key: ${this.key}`,
            'Sec-WebSocket-Version: 13',
            '',
            ''
        ].join('\r\n');

        this.socket.write(headers);

    }

    _handleData (data) {

        if (!this.handshakeCompleted) {

            this._completeHandshake(data);

            return;

        }
        this._parseMessage(data);

    }

    _completeHandshake (data) {

        const response = data.toString();
        const lines = response.split('\r\n');

        // Check if handshake was successful
        if (!response.includes('HTTP/1.1 101')) {

            this.emit('error', new Error('Handshake failed: ' + lines[0]));
            this.socket.destroy();

            return;

        }

        // Find the Sec-WebSocket-Accept header
        const acceptHeader = lines.find((line) => line.toLowerCase().startsWith('sec-websocket-accept:'));

        if (!acceptHeader) {

            this.emit('error', new Error('No Sec-WebSocket-Accept header received'));
            this.socket.destroy();

            return;

        }

        // Validate the accept key
        const acceptKey = acceptHeader.split(':')[1].trim();
        const expectedKey = dummyCrypto()
            .createHash('sha1')
            .update(this.key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
            .digest('base64');

        if (acceptKey !== expectedKey) {

            this.emit('error', new Error('Invalid Sec-WebSocket-Accept key'));
            this.socket.destroy();

            return;

        }

        this.handshakeCompleted = true;
        this.emit('open');

    }

    _parseMessage (data) {

        const buffer = Buffer.from(data);
        let offset = 0;

        while (offset < buffer.length) {

            const firstByte = buffer[offset++];
            const secondByte = buffer[offset++];

            const opcode = firstByte & 0x0F;
            const isMasked = (secondByte & 0x80) !== 0;
            let payloadLength = secondByte & 0x7F;

            if (payloadLength === 126) {

                payloadLength = buffer.readUInt16BE(offset);
                offset += 2;

            } else if (payloadLength === 127) {

                // For very large payloads (64-bit length)
                payloadLength = Number(buffer.readBigUInt64BE(offset));
                offset += 8;

            }

            let maskingKey;

            if (isMasked) {

                maskingKey = buffer.slice(offset, offset + 4);
                offset += 4;

            }

            const payload = buffer.slice(offset, offset + payloadLength);

            offset += payloadLength;

            if (isMasked) {

                // Unmask the payload
                for (let i = 0; i < payload.length; i++) {

                    payload[i] ^= maskingKey[i % 4];

                }

            }

            this._handlePayload(opcode, payload);

        }

    }

    _handlePayload (opcode, payload) {

        switch (opcode) {

        case 0x1: // Text frame
            this.emit('message', payload.toString());
            break;
        case 0x2: // Binary frame
            this.emit('message', payload);
            break;
        case 0x8: // Connection close
            this.socket.end();
            this.emit('close');
            break;
        case 0x9: // Ping
            this._sendPong(payload);
            break;
        case 0xA: // Pong
            // Ignore pong frames
            break;
        default:
            console.warn('Unknown opcode:', opcode);

        }

    }

    send (data) {

        if (typeof data === 'string') {

            this._sendText(data);

        } else if (Buffer.isBuffer(data)) {

            this._sendBinary(data);

        } else {

            throw new Error('Data must be string or Buffer');

        }

    }

    _sendText (data) {

        const payload = Buffer.from(data);

        this._sendFrame(0x81, payload); // FIN + text frame

    }

    _sendBinary (data) {

        this._sendFrame(0x82, data); // FIN + binary frame

    }

    _sendFrame (opcode, payload) {

        // Masking is required for client-to-server frames
        const maskingKey = dummyCrypto().randomBytes(4);
        const maskedPayload = Buffer.alloc(payload.length);

        for (let i = 0; i < payload.length; i++) {

            maskedPayload[i] = payload[i] ^ maskingKey[i % 4];

        }

        let headerLength = 2;
        const payloadLength = payload.length;

        if (payloadLength >= 126 && payloadLength < 65536) {

            headerLength += 2;

        } else if (payloadLength >= 65536) {

            headerLength += 8;

        }

        const header = Buffer.alloc(headerLength + 4); // +4 for masking key

        header[0] = opcode;
        header[1] = 0x80; // Set MASK bit

        let offset = 2;

        if (payloadLength < 126) {

            header[1] |= payloadLength;

        } else if (payloadLength < 65536) {

            header[1] |= 126;
            header.writeUInt16BE(payloadLength, offset);
            offset += 2;

        } else {

            header[1] |= 127;
            header.writeBigUInt64BE(BigInt(payloadLength), offset);
            offset += 8;

        }

        maskingKey.copy(header, offset);

        this.socket.write(Buffer.concat([
            header,
            maskedPayload
        ]));

    }

    _sendPong (payload) {

        this._sendFrame(0x8A, payload); // FIN + pong frame

    }

    ping (data) {

        this._sendFrame(0x89, Buffer.from(data || ''));

    }

    close () {

        this._sendFrame(0x88, Buffer.alloc(0)); // FIN + close frame
        this.socket.end();

    }

}

/**
 * Initiation of nodejs websocket
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} subMethod The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * httpInit({'as':1}, 'as',2)
 * // => {'as':2}
 */
function nodeWs (api, config, subMethod) {

    this.ws = new WebSocketClient(api.ClassSocket, config);
    this.ws.connect();
    this.ws.on('open', () => {

        this.readyState = this.ws.handshakeCompleted;
        console.log('Connected');
        // This.ws.send('Hello Server');

    });
    this.ws.on('message', (data) => {

     //   console.log('Received:', data.toString());
        subMethod.onmessage(data);
        //  Client.close();

    });
    this.ws.on('error', (err) => {

        console.error('Error:', err);

    });
    this.ws.on('close', () => {

        this.readyState = this.ws.handshakeCompleted;

        console.log('Connection closed');

    });

    this.readyState = this.ws.handshakeCompleted;

    return this;

}
export default nodeWs;

