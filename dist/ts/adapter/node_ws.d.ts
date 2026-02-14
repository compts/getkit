export default nodeWs;
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
declare function nodeWs(api: any, config: any, subMethod: any): any;
declare class nodeWs {
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
    constructor(api: any, config: any, subMethod: any);
    ws: WebSocketClient;
    readyState: boolean;
}
declare class WebSocketClient {
    constructor(socket: any, url: any);
    url: any;
    socket: any;
    socketExport: any;
    isSecure: any;
    port: any;
    handshakeCompleted: boolean;
    connect(): void;
    _handleConnect(): void;
    key: any;
    _handleData(data: any): void;
    _completeHandshake(data: any): void;
    _parseMessage(data: any): void;
    _handlePayload(opcode: any, payload: any): void;
    send(data: any): void;
    _sendText(data: any): void;
    _sendBinary(data: any): void;
    _sendFrame(opcode: any, payload: any): void;
    _sendPong(payload: any): void;
    ping(data: any): void;
    close(): void;
}
