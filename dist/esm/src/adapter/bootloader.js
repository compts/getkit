import {domainDetails, hostDetails} from './../lib/core/getType.js';

import {isHttps, isWSProtocolValid} from 'url-assist';

import {requestApi} from '../lib/http/referenceRequest.js';

import {requestWSApi} from '../lib/ws/referenceRequest.js';

import RequestsHttp from '../structure/http/request_http.js';

import RequestsWs from '../structure/ws/request_ws.js';

import {varExtend} from 'structkit';

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @param {string} url The details url
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function singleRequest (url, config) {

    const details = domainDetails(url);
    const validHttp = isHttps(details.hostArgument);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp

    });

    const init = new RequestsHttp(api, config);

    return init;

}

/**
 * It was design for multiple request type for http
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequestHttp({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequestHttp (config) {

    const host = hostDetails();
    const detailsExtend = varExtend(host, config);

    const details = domainDetails(detailsExtend.baseUrl);

    const validHttp = isHttps(details.baseUrl);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp
    });

    const init = new RequestsHttp(api, config);

    return init;

}

/**
 * It was design for multiple request type Ws
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequestWs({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequestWs (config) {

    const host = hostDetails();
    const detailsExtend = varExtend(host, config);

    const details = domainDetails(detailsExtend.baseUrl);

    const validHttp = isWSProtocolValid(details.baseUrl, {
        "isValidFormat": false
    });

    const api = requestWSApi({
        "detail": details,
        "isHttps": validHttp
    });

    const init = new RequestsWs(api, details);

    return init;

}

export {singleRequest, configRequestHttp, configRequestWs};
