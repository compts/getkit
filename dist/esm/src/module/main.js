import {singleRequest, configRequest} from '../core/bootloader';

import {domainDetails, getSegmentPath} from '../core/getType';

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
const Get = function (url, config) {

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
const Delete = function (url, config) {

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
const Post = function (url, config) {

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
const Options = function (url, config) {

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
const Put = function (url, config) {

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
const Patch = function (url, config) {

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
const initialize = function (config) {

    const init = configRequest(config);

    return init;

};

export {Get,Delete,Post,Options,Put,Patch,initialize};
