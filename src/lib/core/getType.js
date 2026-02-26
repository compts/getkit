const {has, varExtend} = require("structkit");
const {getHostDetails, isHttpProtocolValid, joinUrlPath} = require("url-assist");


/**
 * Get request host details
 *
 * @since 0.6.0
 * @category Seq
 * @param {string} host The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * domainDetails('https://example.com')
 *  => {
 *            "domainDetails": {
 *                "domain": "example",
 *                "domainWithTld": "example.com",
 *               "subdomain": "www",
 *                 "tld": "com"
 *            },
 *            "hash": "",
 *            "hostname": 'www.example.com',
 *            "href": 'https://www.example.com',
 *            "password": "",
 *            "pathname": "",
 *            "port": "",
 *            "protocol": "https",
 *            "search": '',
 *            "user": ''
 *         }
 */
function domainDetails (host) {


    return getHostDetails(host);

}


/**
 * Get default host details if the developer has not provided it
 *
 * @since 0.6.0
 * @category Seq
 * @returns {any} Returns the total.
 * @example
 *
 * hostDetails ()
 * // => {
 *        "baseUrl": "http://localhost:4040",
 *        "headers": {},
 *        "type": "http"
 *    }
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
 * Get the segment path to make whole url
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getSegmentPath(config, '/as')
 * // => http://example.com/as
 */
function getSegmentPath (config, path) {


    if (config.href === path) {

        if (isHttpProtocolValid(path)) {

            return path;

        }

        return joinUrlPath(config.protocol+":/", path);

    }

    if (isHttpProtocolValid(path)) {

        return path;

    }

    if (isHttpProtocolValid(config.href)) {

        return joinUrlPath(config.href, path);

    }

    return joinUrlPath(config.protocol+":/", config.href, path);


}

/**
 * Get the details for http adapter
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The config details
 * @param {any} subconfig The subconfig details.
 * @param {any} method The request method.
 * @returns {any} Returns the details.
 * @example
 *
 * getRequestDefaultConfig (config, subconfig, "get")
 * // => {}
 */
function getRequestDefaultConfig (config, subconfig, method) {

    const referenceConfig = {
        "data": {},
        "header": {},
        "isJson": false,
        "onDownloadProgress": null,
        "onUploadProgress": null,
        "query": {},
        "timeout": 0,
        "withCredential": false
    };

    referenceConfig.setRequest= function (data) {

        return data;

    };

    referenceConfig.setResponse= function (data) {

        return data;

    };

    let initialConfig = varExtend(config, subconfig);

    if (has(subconfig)) {

        initialConfig = varExtend(subconfig, config);

    }

    const referenceValue = varExtend(referenceConfig, initialConfig);

    if (method !== "get") {

        if (referenceValue.isJson) {

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
exports.getSegmentPath = getSegmentPath;
exports.getRequestDefaultConfig = getRequestDefaultConfig;
