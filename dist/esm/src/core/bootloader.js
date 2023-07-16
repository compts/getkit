import {domainDetails, hostDetails} from './getType';

import {isHttps} from 'url-assist';

import {requestApi} from './referenceRequest';

import Requests from '../structure/request';

import {varExtend} from 'structkit';

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} details The first number in an addition.
 * @param {any} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
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
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
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

export {singleRequest,configRequest};
