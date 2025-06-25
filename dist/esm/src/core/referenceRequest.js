import {isAjax, isNodejsEnv} from './verifyEnv.js';

import DummyReq from '../structure/dummyReq.js';

import adapterHttp from '../adapter/http.js';

import adapterXhr from '../adapter/xhr.js';

import http from 'http';

import https from 'https';

import {getSegmentPath, getRequestDefaultConfig} from '../core/getType.js';

import {isHttpProtocolValid} from 'url-assist';

/**
 * Check the environment if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} config The config of url to be request
 * @returns {any} Return details of environment.
 * @example
 *
 * requestApi({})
 * // => {}
 */
function requestApi (config) {

    if (isAjax()) {

        if (window.XMLHttpRequest) {

            return {
                "class": new XMLHttpRequest(),
                "detail": config.detail,
                "status": "ajax"

            };

        }

        if (window.ActiveXObject) {

            return {
                "class": new ActiveXObject("Microsoft.XMLHTTP"),
                "detail": config.detail,
                "status": "ajax"
            };

        }

    }

    if (isNodejsEnv() && typeof http !== "undefined" && typeof https !== "undefined") {

        if (config.isHttps) {

            return {
                "class": https,
                "detail": config.detail,
                "status": "http"
            };

        }

        return {
            "class": http,
            "detail": config.detail,
            "status": "http"
        };

    }

    return {
        "class": new DummyReq(),
        "detail": config.detail,
        "status": "dummy"
    };

}

/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The api details.
 * @param {any} config The config details.
 * @param {any} subconfig The subconfig details.
 * @param {any} path The path details.
 * @param {any} method The method details.
 * @returns {any} Returns the class.
 * @example
 *
 * loaderApi(api, config, subconfig, "/path", "get")
 * // => <class>
 */
function loaderApi (api, config, subconfig, path, method) {

    const defaultPath =getSegmentPath(api.detail, path);

    const defaultRequestDefaultConfig = getRequestDefaultConfig(config, subconfig, method);

    if (isHttpProtocolValid(defaultPath) === false) {

        return Promise.reject(String("Invalid Http Protocol"));

    }

    if (api.status ==="ajax") {

        return adapterXhr(api, defaultRequestDefaultConfig, defaultPath, method);

    }
    if (api.status ==="http") {

        return adapterHttp(api, defaultRequestDefaultConfig, defaultPath, method);

    }

    return api.class;

}

export {requestApi, loaderApi};
