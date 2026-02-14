/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

const {isNodejsEnv} = require('../config/verifyEnv');
const crypto = require('crypto');
const {EventEmitter} = require('events');

class EventEmitterDummy {

    // eslint-disable-next-line no-useless-constructor
    constructor () {}

    on () {}

    emit () {}

    removeListener () {}

}

const platformCrypto = isNodejsEnv()
    ? crypto
    : {
        "randomBytes": (size) => {

            const array = new Uint8Array(size);

            window.crypto.getRandomValues(array);

            return Buffer.from(array);

        }
    };

const platformEventEmitter = isNodejsEnv()
    ? EventEmitter
    : EventEmitterDummy;

export {platformCrypto, platformEventEmitter};
