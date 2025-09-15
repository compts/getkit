/* eslint-disable no-undefined */
/* eslint-disable global-require */
/* eslint-disable init-declarations */
const {isAjax, isNodejsEnv} = require('../config/verifyEnv');
const DummyReq = require('../lib/dummyReq');

const adapterHttp = require('../adapter/http');
const adapterXhr = require('../adapter/xhr');

const LocalWs = require('../adapter/local_ws');
const nodeWs = require('../adapter/node_ws');

const {getSegmentPath, getRequestDefaultConfig} = require("../core/getType");
const {isHttpProtocolValid, isWSProtocolValid} = require("url-assist");

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

    // Only require http/https in Node.js environment
    if (isNodejsEnv()) {

        let http, https;

        try {

            http = require("http");
            https = require("https");

        } catch (__) {

            // Fallback if require fails
            http = undefined;
            https = undefined;

        }

        if (typeof http !== "undefined" && typeof https !== "undefined") {

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

    }

    return {
        "class": new DummyReq(),
        "detail": config.detail,
        "status": "dummy"
    };

}


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
function requestWSApi (config) {


    if (isAjax()) {

        if (window.WebSocket) {

            return {
                "ClassSocket": WebSocket,
                "detail": config.detail,
                "status": "ws_local"

            };

        }

    }

    // Only require http/https in Node.js environment
    if (isNodejsEnv()) {

        let http, https;

        try {

            http = require("net");
            https = require("tls");

        } catch (__) {

            // Fallback if require fails
            http = undefined;
            https = undefined;

        }

        if (typeof http !== "undefined" && typeof https !== "undefined") {

            if (config.isHttps) {

                return {
                    "ClassSocket": https,
                    "detail": config.detail,
                    "status": "ws_node"
                };

            }

            return {
                "ClassSocket": http,
                "detail": config.detail,
                "status": "ws_node"
            };

        }

    }

    return {
        "ClassSocket": new DummyReq(),
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


/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The api details.
 * @param {any} config The config details.
 * @param {any} subMethod The subconfig details.
 * @param {any} path The path details.
 * @param {any} method The method details.
 * @returns {any} Returns the class.
 * @example
 *
 * loaderApi(api, config, subconfig, "/path", "get")
 * // => <class>
 */
function loaderWebsocket (api, config, subMethod) {

    const validWs = isWSProtocolValid(config.href);

    if (validWs === false) {

        return Promise.reject(String("Invalid Http Protocol"));

    }

    if (api.status ==="ws_local") {

        return new LocalWs(api, config, subMethod);

    }
    if (api.status ==="ws_node") {

        return nodeWs(api, config, subMethod);

    }

    return api.class;

}
exports.requestApi=requestApi;
exports.requestWSApi=requestWSApi;
exports.loaderApi=loaderApi;
exports.loaderApi=loaderApi;
exports.loaderWebsocket=loaderWebsocket;
