const {isEmpty, has, varExtend} = require("structkit");
const {getHostDetails} = require("url-assist");


/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} host The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
function domainDetails (host) {


    return getHostDetails(host);

}


/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @returns {any} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
function hostDetails () {

    if (typeof location !=="undefined") {

        return {
            "baseUrl": location.origin,
            "headers": {},
            "type": "ajax"
        };

    }

    return {
        "baseUrl": "http://localhost:4040",
        "headers": {},
        "type": "http"
    };

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {string} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function isHttps (config) {

    return (/^(https)$/g).test(config);

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {string} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function checkHttpProtocol (config) {

    return (/^(https|http):\/\//g).test(config);

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function getSegmentPath (config, path) {

    if (config.hostArgument === path) {

        if (checkHttpProtocol(path)) {

            return path;

        }

        return config.protocol+"://"+path;

    }

    if (checkHttpProtocol(config.hostArgument)) {

        return config.hostArgument;

    }

    let defaultPath = config.protocol+"://"+config.hostname;

    if (isEmpty(config.port) === false) {

        defaultPath += ":"+config.port;

    }
    defaultPath += (/^\//g).test(path)
        ? path
        : "/"+path;

    return defaultPath;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @param {any} method The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function getRequestDefaultConfig (config, subconfig, method) {

    console.log(config, subconfig, method, "::config, subconfig, method");

    const referenceConfig = {
        "data": {},
        "header": {},
        "isJsonRequest": false
    };
    let initialConfig = varExtend(config, subconfig);

    if (has(subconfig)) {

        initialConfig = varExtend(subconfig, config);

    }

    const referenceValue = varExtend(referenceConfig, initialConfig);

    if (method !== "get") {

        if (referenceValue.isJsonRequest) {

            referenceValue.header["content-type"] = "application/json";

        }
        if (has(referenceValue.header, "content-type") ===false) {

            referenceValue.header["content-type"] = "application/x-www-form-urlencoded";

        }

    }

    return referenceValue;

}

exports.domainDetails = domainDetails;
exports.hostDetails = hostDetails;
exports.isHttps = isHttps;
exports.getSegmentPath = getSegmentPath;
exports.checkHttpProtocol = checkHttpProtocol;
exports.getRequestDefaultConfig = getRequestDefaultConfig;
