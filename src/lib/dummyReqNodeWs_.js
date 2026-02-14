/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

const {isNodejsEnv} = require('../config/verifyEnv');


/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function dummyCrypto () {

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

class EventEmitterDummy {

    constructor () {
    }

    on () {
    }

    emit () {
    }

    removeListener () {
    }

}

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function dummyEventsEmitter () {

    if (isNodejsEnv()) {

        const {EventEmitter} = require('events');


        return EventEmitter;

    }

    return EventEmitterDummy;

}


exports.dummyCrypto = dummyCrypto;

exports.dummyEventsEmitter = dummyEventsEmitter;
