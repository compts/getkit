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
export function singleRequest(url: string, config: any): any;
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
export function configRequestHttp(config: any): any;
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
export function configRequestWs(config: any): any;
