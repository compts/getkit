const {domainDetails, hostDetails} = require("./getType");
const {isHttps} = require("url-assist");
const {requestApi} = require("./referenceRequest");
const Requests = require("../structure/request");
const {varExtend} = require("structkit");

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @param {any} details The details url
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function singleRequest (details, config) {

    const validHttp = isHttps(details.hostArgument);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp

    });

    const init = new Requests(api, config);

    return init;

}

/**
 * It was design for multiple request type
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequest (config) {

    const host = hostDetails();
    const detailsExtend = varExtend(host, config);

    const details = domainDetails(detailsExtend.baseUrl);

    const validHttp = isHttps(details.baseUrl);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp
    });

    const init = new Requests(api, config);

    return init;

}

exports.singleRequest = singleRequest;
exports.configRequest = configRequest;
