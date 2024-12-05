import {singleRequest, configRequest} from '../core/bootloader.js';

import {domainDetails, getSegmentPath} from '../core/getType.js';

import {amdLocal} from '../core/importScript.js';

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
const get = function (url, config) {

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
const delete = function (url, config) {

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
const post = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.post(url, config);

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
const options = function (url, config) {

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
const Put = function (url, config) {

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
const patch = function (url, config) {

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
const initialize = function (config) {

    const init = configRequest(config);

    return init;

};

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
const importScipt = function (url, config) {

    if (typeof document !== "undefined") {

        amdLocal(url, config);

        return;

    }

    throw new Error("This is supported only in browser, but we are working nodejs compability");

};

export {get,delete,post,options,Put,patch,initialize,importScipt};
