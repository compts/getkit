import {singleRequest, configRequest} from '../core/bootloader.js';

import {domainDetails} from '../core/getType.js';

import {amdLocal} from '../core/importScript.js';

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
const nget = function (url, config) {

    const details = domainDetails(url);

    const init = singleRequest(details, config);

    return init.get(url, config);

};

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
const ndelete = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.delete(url, config);

};

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
const npost = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.post(url, config);

};

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
const noptions = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.options(url, config);

};

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
const nput = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.put(url, config);

};

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
const npatch = function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.patch(url);

};

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
const initialize = function (config) {

    const init = configRequest(config);

    return init;

};

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
const importScipt = function (url, config) {

    if (typeof document !== "undefined") {

        amdLocal(url, config);

        return;

    }

    throw new Error("This is supported only in browser, but we are working nodejs compability");

};

export {nget, ndelete, npost, noptions, nput, npatch, initialize, importScipt};
