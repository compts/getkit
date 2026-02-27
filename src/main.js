const {singleRequest, configRequestHttp, configRequestWs} = require("./adapter/bootloader");
const {amdLocal} = require("./adapter/importScript");


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
exports.nget = function (url, config) {

    const init = singleRequest(url, config);

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
exports.ndelete = function (url, config) {

    const init = singleRequest(url, config);

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
exports.npost = function (url, config) {

    const init = singleRequest(url, config);

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
exports.noptions = function (url, config) {

    const init = singleRequest(url, config);

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
exports.nput = function (url, config) {

    const init = singleRequest(url, config);

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
exports.npatch = function (url, config) {

    const init = singleRequest(url, config);

    return init.patch(url);

};

/**
 * Request http initialize
 *
 * @since 0.6.0
 * @category request
 * @param {any} [config] The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * initHttp({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */
exports.initHttp = function (config) {

    const init = configRequestHttp(config);

    return init;

};


/**
 * Request ws initialize
 *
 * @since 0.6.0
 * @category request
 * @param {any} [config] The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * initHttp({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */
exports.initWs = function (config) {

    const init = configRequestWs(config);

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
 * importScript("http://localhost:4040/")
 * // => Promise<any>
 */
exports.importScript = async function (url, config) {


    if (typeof document !== "undefined") {

        await amdLocal(url, config);

        return;

    }

    throw new Error("This is supported only in browser, but we are working nodejs compability");

};

