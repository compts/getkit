const {singleRequest, configRequest} = require("../core/bootloader");
const {domainDetails, getSegmentPath} = require("../core/getType");


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
exports.Get = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.get(url, config);

};

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
exports.Delete = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.delete(url, config);

};

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
exports.Post = function (url, config) {

    const details = domainDetails(url);
    const path = getSegmentPath(details);
    const init = singleRequest(details, config);

    return init.post(path, config);

};

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
exports.Options = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.options(url, config);

};

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
exports.Put = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.put(url, config);

};

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
exports.Patch = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.patch(url);

};

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
exports.initialize = function (config) {

    const init = configRequest(config);

    return init;

};


