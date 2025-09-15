export default localWs;
/**
 * Initiation of nodejs http
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * httpInit({'as':1}, 'as',2)
 * // => {'as':2}
 */
declare function localWs(api: any, config: any): any;
declare class localWs {
    /**
     * Initiation of nodejs http
     *
     * @since 0.5.0
     * @category environment
     * @param {any} api The first number in an addition.
     * @param {any} config The first number in an addition.
     * @returns {any} Returns the total.
     * @example
     *
     * httpInit({'as':1}, 'as',2)
     * // => {'as':2}
     */
    constructor(api: any, config: any);
    ws: any;
    send(msg: any): void;
    close(): void;
}
