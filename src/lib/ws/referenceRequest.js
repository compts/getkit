/* eslint-disable no-undefined */
/* eslint-disable global-require */
/* eslint-disable init-declarations */


const LocalWs = require('../../adapter/factory/browser/local_ws');
const nodeWs = require('../../adapter/factory/node/node_ws');

const {isWSProtocolValid} = require("url-assist");

const {isAjax, isNodejsEnv} = require('../../config/verifyEnv');
const DummyReq = require('../../structure/format/dummyReq');


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

exports.loaderWebsocket=loaderWebsocket;

exports.requestWSApi=requestWSApi;
