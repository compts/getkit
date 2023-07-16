/**
 * Request Get
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * Get('/')
 * // => Promise<any>
 */
export function Get(url: string, config?: any): Promise<any>;
/**
 * Request Delete
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * Delete('/')
 * // => Promise<any>
 */
export function Delete(url: string, config?: any): Promise<any>;
/**
 * Request Post
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * Post('/')
 * // => Promise<any>
 */
export function Post(url: string, config?: any): Promise<any>;
/**
 * Request Options
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * Options('/')
 * // => Promise<any>
 */
export function Options(url: string, config?: any): Promise<any>;
/**
 * Request Put
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * Put('/')
 * // => Promise<any>
 */
export function Put(url: string, config?: any): Promise<any>;
/**
 * Request Patch
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * Patch('/')
 * // => Promise<any>
 */
export function Patch(url: string, config?: any): Promise<any>;
/**
 * Request initialize
 *
 * @since 1.0.1
 * @category request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * initialize({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */
export function initialize(config?: any): Promise<any>;
/**
 * Importing JS in CDN, this is experimental feature
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * importScipt("http://localhost:4040/")
 * // => Promise<any>
 */
export function importScipt(url: string, config?: any): Promise<any>;
