export default LocalWs;
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
declare function LocalWs(api: any, config: any, subMethod: any): any;
declare class LocalWs {
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
    constructor(api: any, config: any, subMethod: any);
    ws: any;
    readyState: any;
}
