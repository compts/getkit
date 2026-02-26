/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

const {isNodejsEnv} = require('../../config/verifyEnv');
const crypto = require('crypto');
const {EventEmitter} = require('events');

class EventEmitterDummy {

    // eslint-disable-next-line no-useless-constructor
    constructor () {}

    on () {}

    emit () {}

    removeListener () {}

}

function platformCrypto () {

    return isNodejsEnv()
        ? crypto
        : {
            "randomBytes": (size) => {

                const array = new Uint8Array(size);

                window.crypto.getRandomValues(array);

                return Buffer.from(array);

            }
        };

}

function platformEmitEvent () {

    return isNodejsEnv()
        ? EventEmitter
        : EventEmitterDummy;

}

exports.platformCrypto = platformCrypto;
exports.platformEmitEvent = platformEmitEvent;
