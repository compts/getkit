/**
 * Request Get
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any=} config The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * httpGet('/')
 * // => Promise<any>
 */
export function httpGet(url: string, config?: any | undefined): Promise<any>;
/**
 * Request Delete
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any=} config The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * httpDelete('/')
 * // => Promise<any>
 */
export function httpDelete(url: string, config?: any | undefined): Promise<any>;
/**
 * Request Post
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any=} config The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * httpPost('/')
 * // => Promise<any>
 */
export function httpPost(url: string, config?: any | undefined): Promise<any>;
/**
 * Request Options
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any=} config The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * httpOptions('/')
 * // => Promise<any>
 */
export function httpOptions(url: string, config?: any | undefined): Promise<any>;
/**
 * Request Put
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any=} config The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * httpPut('/')
 * // => Promise<any>
 */
export function httpPut(url: string, config?: any | undefined): Promise<any>;
/**
 * Request Patch
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any=} config The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * httpPatch('/')
 * // => Promise<any>
 */
export function httpPatch(url: string, config?: any | undefined): Promise<any>;
/**
 * Request initialize
 *
 * @since 1.0.1
 * @category request
 * @param {any=} config The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * httpInitialize({"baseUrl": "http://localhost:4040/"})
 * // => Requests<any>
 */
export function httpInitialize(config?: any | undefined): any;
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
