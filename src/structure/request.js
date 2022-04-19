const {loaderApi} = require("../core/referenceRequest");

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
function Requests (api, config) {

    this.api =api;
    this.config =config;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.get =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "get");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.delete =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "get");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.post =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "post");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.options =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "options");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.put =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "put");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.patch =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "patch");

};

module.exports = Requests;
