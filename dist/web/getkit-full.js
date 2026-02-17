(function(global){
global.gtk={};

/**
 * Get request host details
 *
 * @since 0.6.0
 * @category Seq
 * @param {string} host The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * domainDetails('https://example.com')
 *  => {
 *            "domainDetails": {
 *                "domain": "example",
 *                "domainWithTld": "example.com",
 *               "subdomain": "www",
 *                 "tld": "com"
 *            },
 *            "hash": "",
 *            "hostname": 'www.example.com',
 *            "href": 'https://www.example.com',
 *            "password": "",
 *            "pathname": "",
 *            "port": "",
 *            "protocol": "https",
 *            "search": '',
 *            "user": ''
 *         }
 */
function domainDetails (host) {

    return urs.getHostDetails(host);

}

/**
 * Get default host details if the developer has not provided it
 *
 * @since 0.6.0
 * @category Seq
 * @returns {any} Returns the total.
 * @example
 *
 * hostDetails ()
 * // => {
 *        "baseUrl": "http://localhost:4040",
 *        "headers": {},
 *        "type": "http"
 *    }
 */
function hostDetails () {

    if (typeof location !=="undefined") {

        return {
            "baseUrl": location.origin,
            "headers": {},
            "type": "ajax"
        };

    }

    return {
        "baseUrl": "http://localhost:4040",
        "headers": {},
        "type": "http"
    };

}

/**
 * Get the segment path to make whole url
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getSegmentPath(config, '/as')
 * // => http://example.com/as
 */
function getSegmentPath (config, path) {

    if (config.href === path) {

        if (urs.isHttpProtocolValid(path)) {

            return path;

        }

        return urs.joinUrlPath(config.protocol+":/", path);

    }

    if (urs.isHttpProtocolValid(path)) {

        return path;

    }

    if (urs.isHttpProtocolValid(config.href)) {

        return urs.joinUrlPath(config.href, path);

    }

    return urs.joinUrlPath(config.protocol+":/", config.href, path);

}

/**
 * Get the details for http adapter
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The config details
 * @param {any} subconfig The subconfig details.
 * @param {any} method The request method.
 * @returns {any} Returns the details.
 * @example
 *
 * getRequestDefaultConfig (config, subconfig, "get")
 * // => {}
 */
function getRequestDefaultConfig (config, subconfig, method) {

    const referenceConfig = {
        "data": {},
        "header": {},
        "isJson": false,
        "onDownloadProgress": null,
        "onUploadProgress": null,
        "query": {},
        "timeout": 0,
        "withCredential": false
    };

    referenceConfig.setRequest= function (data) {

        return data;

    };

    referenceConfig.setResponse= function (data) {

        return data;

    };

    let initialConfig = _stk.varExtend(config, subconfig);

    if (_stk.has(subconfig)) {

        initialConfig = _stk.varExtend(subconfig, config);

    }

    const referenceValue = _stk.varExtend(referenceConfig, initialConfig);

    if (method !== "get") {

        if (referenceValue.isJson) {

            referenceValue.header["content-type"] = "application/json";

        }
        if (_stk.has(referenceValue.header, "content-type") ===false) {

            referenceValue.header["content-type"] = "application/x-www-form-urlencoded";

        }

    }

    return referenceValue;

}

/* eslint-disable no-undefined */
/* eslint-disable global-require */
/* eslint-disable init-declarations */

const negOne = -1;
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;

/**
 * Check if object or value
 *
 * @since 0.5.0
 * @category environment
 * @returns {number} Returns the status number.
 * @example
 *
 * checkEnvironmentStatus()
 * // => 1
 */
function checkEnvironmentStatus () {

    let status = zero;

    if (typeof XMLHttpRequest !== "undefined" && status === zero) {

        status = one;

    }
    if (typeof ActiveXObject !== "undefined" && status === zero) {

        status = two;

    }
    if (typeof XDomainRequest !== "undefined" && status === zero) {

        status = three;

    }
    if (typeof process !== "undefined" && status === zero) {

        status = four;

    }

    if (typeof WebSocket !== "undefined" && status === zero) {

        status = five;

    }

    return status;

}

/**
 * To check if it`s browser environment
 *
 * @since 0.5.0
 * @category environment
 * @returns {boolean} Returns if it`s valid.
 * @example
 *
 * isAjax()
 * // => true
 */
function isAjax () {

    return _stk.indexOfExist(checkEnvironmentStatus(), [
        one,
        two,
        three
    ]);

}

/**
 * To check if it`s nodejs environment
 *
 * @since 0.5.0
 * @category environment
 * @returns {boolean} Returns if it`s valid.
 * @example
 *
 * isNodejsEnv()
 * // => true
 */
function isNodejsEnv () {

    return _stk.indexOfExist(checkEnvironmentStatus(), [four]);

}

/* eslint-disable no-empty-function */
/**
 * A getkit intiator
 * @class
 * @name DummyReq
 */
function DummyReq () {

}

/**
 * To append the pathname with slash if not found
 *
 * @since 0.6.0
 * @category Seq
 * @param {string} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * appendPrefxPath("test")
 * // => /test
 */
function appendPrefxPath (path) {

    if (!(/^\//g).test(path)) {

        return "/"+path;

    }

    return path;

}

/**
 * Define request header to its parameter
 *
 * @since 0.6.0
 * @category environment
 * @param {any} param The request parameter
 * @param {any} header The request header.
 * @returns {any} Returns the date in query string
 * @example
 *
 * setRequestParameter({'as':1}, {'as':1})
 * // => as=2
 */
function setRequestParameter (param, header) {

    if (typeof FormData !== "undefined") {

        if (param instanceof FormData) {

            return param;

        }

    }

    if (_stk.indexOf(header["content-type"], ["application/json"]) >= zero && _stk.indexOf(_stk.getTypeof(param), [
        "json",
        "array"
    ]) >= zero) {

        return _stk.parseString(param);

    }

    return urs.qsStringify(param);

}

/**
 * Request config
 *
 * @since 0.6.0
 * @category environment
 * @param {any} param The first number in an addition.
 * @param {any} header The first number in an addition.
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function setRespondData (param, header, config) {

    if (_stk.isString(param)) {

        if (_stk.indexOf(header["content-type"]
            ?header["content-type"].toLowerCase()
            :"", ["application/json"]) >= zero || config.isJson) {

            return _stk.parseJson(param.trim());

        }

    }

    return param;

}

/**
 * Initiation of nodejs http
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @param {any} methods The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * httpInit({'as':1}, 'as',2)
 * // => {'as':2}
 */
function httpInit (api, config, path, methods) {

    const req = api.class;

    const detail = domainDetails(path);

    const options = {
        "headers": config.header,
        "hostname": detail.hostname,
        "method": methods,
        "path": appendPrefxPath(detail.pathname),
        "port": detail.port

    };

    if (_stk.isEmpty(config.query)) {

        options.qs = config.query;

    }

    const dataRequest = config.setRequest({

        "data": config.data,
        "header": config.header

    });

    if (_stk.getTypeof(dataRequest) ==="json") {

        options.headers = dataRequest.header;

    }

    const myPromise = new Promise((resolve, reject) => {

        try {

            let str = '';
            const callback = function (response) {

                response.on('data', function (chunk) {

                    str += chunk;

                });

                response.on('end', function () {

                    const outputResponse = {
                        "data": setRespondData(str, response.headers, config),
                        "header": response.headers,
                        "status": response.statusCode
                    };

                    const dataResponse = config.setResponse(outputResponse);

                    resolve(dataResponse);

                });

            };

            const reqServer = req.request(options, callback);

            // This is the data we are posting, it needs to be a string or a buffer
            reqServer.write(setRequestParameter(config.data, config.header));
            reqServer.end();

        } catch (err) {

            reject(err);

        }

    });

    return myPromise;

}

adapterHttp=httpInit

/**
 * Adding preferred request header
 *
 * @since 0.5.0
 * @category environment
 * @param {any} xhttp The first number in an addition.
 * @param {any} header The first number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * setRequestHeader(xhr, {'content-type':"text/plain"})
 * // => null
 */
function setRequestHeader (xhttp, header) {

    _stk.each(header, function (val, key) {

        xhttp.setRequestHeader(key, val);

    });

}

/**
 * Initiation of ajax http in browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @param {any} method The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * xhrInit(api, config, "/", "get")
 * // => Promise<any>
 */
function xhrInit (api, config, path, method) {

    let definePath = path;

    if (_stk.isEmpty(config.query) === false) {

        definePath = definePath+"/?"+urs.qsStringify(config.query);

    }

    const xhttp = api.class;

    const myPromise = new Promise((resolve, reject) => {

        try {

            xhttp.withCredential = config.withCredential;

            xhttp.onreadystatechange = function () {

                const rawTextResponseHeader = this.getAllResponseHeaders();

                // Convert the header string into an array  of individual headers

                const arr = rawTextResponseHeader.trim().split(/[\r\n]+/);

                // Create a map of header names to values
                const headerMap = {};

                arr.forEach(function (line) {

                    const parts = line.split(': ');
                    const header = parts.shift();
                    const value = parts.join(': ');

                    headerMap[header] = value;

                });

                if (this.readyState === four) {

                    const outputResponse = {
                        "data": setRespondData(this.response, headerMap, config),
                        "header": headerMap,
                        "status": this.status
                    };
                    const dataResponse = config.setResponse(outputResponse);

                    resolve(dataResponse);

                }

            };

            const dataRequest = config.setRequest({

                "data": config.data,
                "header": config.header

            });

            xhttp.open(method, definePath, method !== "get");

            setRequestHeader(xhttp, dataRequest.header);

            if (_stk.getTypeof(config.onDownloadProgress) === "function") {

                xhttp.addEventListener('progress', config.onDownloadProgress);

            }

            if (_stk.getTypeof(config.onUploadProgress) === "function" && xhttp.upload) {

                xhttp.upload.addEventListener('progress', config.onUploadProgress);

            }

            if (method === "get") {

                xhttp.send();

            } else {

                xhttp.send(setRequestParameter(config.data, config.header));

            }

        } catch (err) {

            reject(err);

        }

    });

    return myPromise;

}

adapterXhr=xhrInit

/**
 * Initiation of web websocket
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
function LocalWs (api, config, subMethod) {

    let definePath = config.protocol+ '://' + config.hostname;

    if (_stk.isEmpty(config.port) === false) {

        definePath = definePath+ ':' + config.port;

    } else {

        definePath = definePath+ ':' + (api.isHttps
            ? 443
            : 80);

    }

    this.ws = new api.ClassSocket(definePath);

    this.ws.onopen = () => {

        this.readyState = _stk.toBoolean(this.ws.readyState);
        console.log('Connected to WebSocket server');

    };

    this.ws.onmessage = (event) => {

        //    console.log('Received message:', event.data);
        subMethod.onmessage(event.data);

    };

    this.ws.onclose = () => {

        this.readyState = _stk.toBoolean(this.ws.readyState);
        console.log('Disconnected from WebSocket server');

    };

    this.ws.onerror = (error) => {

        console.error('WebSocket error:', error);

    };

    this.readyState = _stk.toBoolean(this.ws.readyState);

    return this;

}

/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

class EventEmitterDummy {

    // eslint-disable-next-line no-useless-constructor
    constructor () {}

    on () {}

    emit () {}

    removeListener () {}

}

function platformCrypto () {

    return isNodejsEnv()
        ? crypto
        : {
            "randomBytes": (size) => {

                const array = new Uint8Array(size);

                window.crypto.getRandomValues(array);

                return Buffer.from(array);

            }
        };

}

function platformEmitEvent () {

    return isNodejsEnv()
        ? EventEmitter
        : EventEmitterDummy;

}

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function dummyCrypto () {

    return platformCrypto;

}

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function dummyEventsEmitter () {

    return platformEmitEvent;

}

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
        const pathname = _stk.isEmpty(this.url.pathname)
            ? '/'
            : this.url.pathname;
        const search = _stk.isEmpty(this.url.search)
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

/**
 * Check the environment if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} config The config of url to be request
 * @returns {any} Return details of environment.
 * @example
 *
 * requestApi({})
 * // => {}
 */
function requestApi (config) {

    if (isAjax()) {

        if (window.XMLHttpRequest) {

            return {
                "class": new XMLHttpRequest(),
                "detail": config.detail,
                "status": "ajax"

            };

        }

        if (window.ActiveXObject) {

            return {
                "class": new ActiveXObject("Microsoft.XMLHTTP"),
                "detail": config.detail,
                "status": "ajax"
            };

        }

    }

    // Only require http/https in Node.js environment
    if (isNodejsEnv()) {

        let http, https;

        try {

            http = require("http");
            https = require("https");

        } catch (__) {

            // Fallback if require fails
            http = undefined;
            https = undefined;

        }

        if (typeof http !== "undefined" && typeof https !== "undefined") {

            if (config.isHttps) {

                return {
                    "class": https,
                    "detail": config.detail,
                    "status": "http"
                };

            }

            return {
                "class": http,
                "detail": config.detail,
                "status": "http"
            };

        }

    }

    return {
        "class": new DummyReq(),
        "detail": config.detail,
        "status": "dummy"
    };

}

/**
 * Check the environment if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} config The config of url to be request
 * @returns {any} Return details of environment.
 * @example
 *
 * requestApi({})
 * // => {}
 */
function requestWSApi (config) {

    if (isAjax()) {

        if (window.WebSocket) {

            return {
                "ClassSocket": WebSocket,
                "detail": config.detail,
                "status": "ws_local"

            };

        }

    }

    // Only require http/https in Node.js environment
    if (isNodejsEnv()) {

        let http, https;

        try {

            http = require("net");
            https = require("tls");

        } catch (__) {

            // Fallback if require fails
            http = undefined;
            https = undefined;

        }

        if (typeof http !== "undefined" && typeof https !== "undefined") {

            if (config.isHttps) {

                return {
                    "ClassSocket": https,
                    "detail": config.detail,
                    "status": "ws_node"
                };

            }

            return {
                "ClassSocket": http,
                "detail": config.detail,
                "status": "ws_node"
            };

        }

    }

    return {
        "ClassSocket": new DummyReq(),
        "detail": config.detail,
        "status": "dummy"
    };

}

/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The api details.
 * @param {any} config The config details.
 * @param {any} subconfig The subconfig details.
 * @param {any} path The path details.
 * @param {any} method The method details.
 * @returns {any} Returns the class.
 * @example
 *
 * loaderApi(api, config, subconfig, "/path", "get")
 * // => <class>
 */
function loaderApi (api, config, subconfig, path, method) {

    const defaultPath =getSegmentPath(api.detail, path);

    const defaultRequestDefaultConfig = getRequestDefaultConfig(config, subconfig, method);

    if (urs.isHttpProtocolValid(defaultPath) === false) {

        return Promise.reject(String("Invalid Http Protocol"));

    }

    if (api.status ==="ajax") {

        return adapterXhr(api, defaultRequestDefaultConfig, defaultPath, method);

    }
    if (api.status ==="http") {

        return adapterHttp(api, defaultRequestDefaultConfig, defaultPath, method);

    }

    return api.class;

}

/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The api details.
 * @param {any} config The config details.
 * @param {any} subMethod The subconfig details.
 * @param {any} path The path details.
 * @param {any} method The method details.
 * @returns {any} Returns the class.
 * @example
 *
 * loaderApi(api, config, subconfig, "/path", "get")
 * // => <class>
 */
function loaderWebsocket (api, config, subMethod) {

    const validWs = urs.isWSProtocolValid(config.href);

    if (validWs === false) {

        return Promise.reject(String("Invalid Http Protocol"));

    }

    if (api.status ==="ws_local") {

        return new LocalWs(api, config, subMethod);

    }
    if (api.status ==="ws_node") {

        return nodeWs(api, config, subMethod);

    }

    return api.class;

}

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
function RequestsHttp (api, config) {

    this.api =api;
    this.config =config;

}

/**
 * Request Get
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.get = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "get");

};

/**
 * Request Delete
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.delete = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "delete");

};

/**
 * Request Post
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.post = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "post");

};

/**
 * Request Options
 *
 * @since 1.0.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.options = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "options");

};

/**
 * Request Put
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.put = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "put");

};

/**
 * Request Patch
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.patch = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "patch");

};

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
function RequestsWs (api, config) {

    this.api =api;
    this.config =config;
    const subMethod = {};
    const loaderWS = loaderWebsocket(this.api, this.config, subMethod);

    return new RequestsWsDummy(loaderWS, subMethod);

}

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} subMethod request body
 * @name getKit
 */
function RequestsWsDummy (api, subMethod) {

    this.send = (msg) => {

        console.log("Send message:", api.readyState, msg);
        //  Api.ws.send(msg);

    };
    this.received = () => {

        const main = this;

        subMethod.onmessage(function (data) {

            console.log("Received message:", data);

            main.call(main, data);

        });

    };
    this.close = () => {

        api.ws.close();

    };

}

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @param {string} url The details url
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function singleRequest (url, config) {

    const details = domainDetails(url);
    const validHttp = urs.isHttps(details.hostArgument);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp

    });

    const init = new RequestsHttp(api, config);

    return init;

}

/**
 * It was design for multiple request type for http
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequestHttp({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequestHttp (config) {

    const host = hostDetails();
    const detailsExtend = _stk.varExtend(host, config);

    const details = domainDetails(detailsExtend.baseUrl);

    const validHttp = urs.isHttps(details.baseUrl);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp
    });

    const init = new RequestsHttp(api, config);

    return init;

}

/**
 * It was design for multiple request type Ws
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequestWs({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequestWs (config) {

    const host = hostDetails();
    const detailsExtend = _stk.varExtend(host, config);

    const details = domainDetails(detailsExtend.baseUrl);

    const validHttp = urs.isWSProtocolValid(details.baseUrl, {
        "isValidFormat": false
    });

    const api = requestWSApi({
        "detail": details,
        "isHttps": validHttp
    });

    const init = new RequestsWs(api, details);

    return init;

}

/**
 * Request initialize
 *
 * @since 0.5.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * importScipt("http://localhost:4040/")
 * // => Promise<any>
 */
function amdLocal (url, config) {

    let isValidExt = false;
    const zero = 0;

    if (typeof document !== "undefined") {

        const headHtm = document.getElementsByTagName('head');

        if (urs.isUrlExtValid(url, "js")) {

            isValidExt = true;
            const ps = document.createElement('script');
            const script = document.getElementsByTagName('script');

            ps.type = 'text/javascript';
            ps.src = url;
            ps.async = true;
            ps.onload = function (err) {

                handleCallback(err, config);

            };

            ps.onerror = function (err) {

                handleCallback(err, config);

            };

            if (headHtm.length >zero) {

                headHtm[zero].appendChild(ps);

            }
            if (headHtm.length === zero && script.length > zero) {

                script[zero].appendChild(ps);

            }

        }

        if (urs.isUrlExtValid(url, "css")) {

            isValidExt = true;

            if (headHtm.length > zero) {

                const link = document.createElement("link");

                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = url;
                headHtm[zero].appendChild(link);

                link.onload = function (err) {

                    handleCallback(err, config);

                };

                link.onerror = function (err) {

                    handleCallback(err, config);

                };
                if (headHtm.length >zero) {

                    headHtm[zero].appendChild(link);

                }

            }

        }

    }

    if (!isValidExt) {

        throw new Error("This library supported css and js");

    }

}

/**
 * Handle callback
 *
 * @since 0.5.0
 * @category request
 * @param {string} data The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * handleCallback('error',()=>{})
 * // => Promise<any>
 */
function handleCallback (data, config) {

    if (_stk.getTypeof(config) === "function") {

        config(data);

    }

}

/**
 * Request Get
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * nget('/')
 * // => Promise<any>
 */

gtk.nget=function (url, config) {

    const init = singleRequest(url, config);

    return init.get(url, config);

};

/**
 * Request Delete
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * ndelete('/')
 * // => Promise<any>
 */

gtk.ndelete=function (url, config) {

    const init = singleRequest(url, config);

    return init.delete(url, config);

};

/**
 * Request Post
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * npost('/')
 * // => Promise<any>
 */

gtk.npost=function (url, config) {

    const init = singleRequest(url, config);

    return init.post(url, config);

};

/**
 * Request Options
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * noptions('/')
 * // => Promise<any>
 */

gtk.noptions=function (url, config) {

    const init = singleRequest(url, config);

    return init.options(url, config);

};

/**
 * Request Put
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * nput('/')
 * // => Promise<any>
 */

gtk.nput=function (url, config) {

    const init = singleRequest(url, config);

    return init.put(url, config);

};

/**
 * Request Patch
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * npatch('/')
 * // => Promise<any>
 */

gtk.npatch=function (url, config) {

    const init = singleRequest(url, config);

    return init.patch(url);

};

/**
 * Request http initialize
 *
 * @since 0.6.0
 * @category request
 * @param {any} [config] The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * initHttp({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */

gtk.initHttp=function (config) {

    const init = configRequestHttp(config);

    return init;

};

/**
 * Request ws initialize
 *
 * @since 0.6.0
 * @category request
 * @param {any} [config] The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * initHttp({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */

gtk.initWs=function (config) {

    const init = configRequestWs(config);

    return init;

};

/**
 * Importing JS in CDN, this is experimental feature
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * importScript("http://localhost:4040/")
 * // => Promise<any>
 */

gtk.importScript=function (url, config) {

    if (typeof document !== "undefined") {

        amdLocal(url, config);

        return;

    }

    throw new Error("This is supported only in browser, but we are working nodejs compability");

};

})(typeof window !== "undefined" ? window : this);