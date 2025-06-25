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
export function nget(url: string, config?: any): Promise<any>;
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
export function ndelete(url: string, config?: any): Promise<any>;
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
export function npost(url: string, config?: any): Promise<any>;
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
export function noptions(url: string, config?: any): Promise<any>;
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
export function nput(url: string, config?: any): Promise<any>;
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
export function npatch(url: string, config?: any): Promise<any>;
/**
 * Request initialize
 *
 * @since 0.6.0
 * @category request
 * @param {any} [config] The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * initialize({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */
export function initialize(config?: any): any;
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
 * importScipt("http://localhost:4040/")
 * // => Promise<any>
 */
export function importScipt(url: string, config?: any): Promise<any>;
