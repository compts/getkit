/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @param {any} details The details url
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
export function singleRequest(details: any, config: any): any;
/**
 * It was design for multiple request type
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
export function configRequest(config: any): any;
