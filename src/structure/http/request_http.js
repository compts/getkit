const {loaderApi} = require("../../lib/http/referenceRequest");

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
function RequestsHttp (api, config) {

    this.api =api;
    this.config =config;

}

/**
 * Request Get
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.get = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "get");

};

/**
 * Request Delete
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.delete = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "delete");

};

/**
 * Request Post
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.post = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "post");

};

/**
 * Request Options
 *
 * @since 1.0.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.options = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "options");

};

/**
 * Request Put
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.put = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "put");

};

/**
 * Request Patch
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
RequestsHttp.prototype.patch = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "patch");

};

module.exports = RequestsHttp;
