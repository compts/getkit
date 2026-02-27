/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

const {isNodejsEnv} = require('../../config/verifyEnv');

class EventEmitterDummy {

    // eslint-disable-next-line no-useless-constructor
    constructor () {}

    on () {}

    emit () {}

    removeListener () {}

}

/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.6.0
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
function platformCrypto () {

    if (isNodejsEnv()) {

        const crypto = require('crypto');

        return crypto;

    }

    return {
        "randomBytes": (size) => {

            const array = new Uint8Array(size);

            window.crypto.getRandomValues(array);

            return Buffer.from(array);

        }
    };

}


/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.6.0
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
function platformEmitEvent () {

    if (isNodejsEnv()) {

        const {EventEmitter} = require('events');

        return EventEmitter;

    }

    return EventEmitterDummy;

}

exports.platformCrypto = platformCrypto;
exports.platformEmitEvent = platformEmitEvent;
