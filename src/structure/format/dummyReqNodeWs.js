/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

const {platformCrypto, platformEmitEvent} = require('../../lib/ws/platformNodeAdapters');

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

    return platformCrypto;

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

    return platformEmitEvent;

}

exports.dummyCrypto = dummyCrypto;
exports.dummyEventsEmitter = dummyEventsEmitter;
