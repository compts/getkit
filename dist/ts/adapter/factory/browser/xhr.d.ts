export default xhrInit;
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
declare function xhrInit(api: any, config: any, path: any, method: any): Promise<any>;
