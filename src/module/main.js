const {singleRequest, configRequest} = require("../core/bootloader");
const {domainDetails, getSegmentPath} = require("../core/getType");


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
exports.Get = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.get(url, config);

};

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
exports.Delete = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.delete(url, config);

};

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
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Options('/')
 * // => {'as':2}
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
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Put('/')
 * // => {'as':2}
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
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Patch('/')
 * // => {'as':2}
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
 * @category environment
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * initialize({"baseUrl": "http://localhost:4040/"})
 * // => {'as':2}
 */
exports.initialize = function (config) {

    const init = configRequest(config);

    return init;

};


