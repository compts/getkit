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
export function setRequestParameter(param: any, header: any): any;
