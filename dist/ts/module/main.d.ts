/**
 * Request Get
 *
 * @since 1.0.1
 * @category environment
 * @param {string} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Get('/')
 * // => {'as':2}
 */
export function Get(url: string, config?: any): Promise<any>;
/**
 * Request Delete
 *
 * @since 1.0.1
 * @category environment
 * @param {string} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Delete('/')
 * // => {'as':2}
 */
export function Delete(url: string, config?: any): Promise<any>;
/**
 * Request Post
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Post('/')
 * // => {'as':2}
 */
export function Post(url: any, config?: any): Promise<any>;
/**
 * Request Options
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Options('/')
 * // => {'as':2}
 */
export function Options(url: any, config?: any): Promise<any>;
/**
 * Request Put
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Put('/')
 * // => {'as':2}
 */
export function Put(url: any, config?: any): Promise<any>;
/**
 * Request Patch
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Patch('/')
 * // => {'as':2}
 */
export function Patch(url: any, config?: any): Promise<any>;
/**
 * Request initialize
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * initialize({"baseUrl": "http://localhost:4040/"})
 * // => {'as':2}
 */
export function initialize(config: any): any;
