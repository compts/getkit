/* eslint-disable id-length */
/* eslint-disable no-undefined */
/* eslint-disable prefer-destructuring */
/* eslint-disable init-declarations */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable global-require */

import {isNodejsEnv} from '../../config/verifyEnv.js';

let crypto;
let EventEmitter;

/*
 * ...existing code...
 * Remove build-time imports that break Angular bundling — resolve Node-only modules at runtime
 * ...existing code...
 */
try {

    if (isNodejsEnv()) {

        // Try to obtain CommonJS require at runtime (avoids static bundler resolution in Angular)
        try {

            // This will succeed in Node CommonJS contexts; in ESM it will throw
            // eslint-disable-next-line no-new-func
            const req = Function('return require')();
            const nodeCrypto = req('crypto');
            const events = req('events');

            crypto = nodeCrypto;
            EventEmitter = events.EventEmitter;

        } catch (e) {

            /*
             * Fallbacks for Node ESM or other runtimes:
             * Don't perform top-level await/import here to avoid Angular build issues.
             * Defer resolution to runtime call sites (see platformCrypto randomBytes implementation).
             */
            crypto = undefined;
            EventEmitter = undefined;

        }

    }

} catch (e) {

    // Keep safe if environment checks throw
    crypto = undefined;
    EventEmitter = undefined;

}
// ...existing code...

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

        /*
         * Return an object that uses the Node crypto when available synchronously,
         * otherwise attempts safe fallbacks (webcrypto or runtime require).
         */
        return {
            "randomBytes": (size) => {

                // Prefer already-resolved crypto module
                if (crypto && typeof crypto.randomBytes === 'function') {

                    return crypto.randomBytes(size);

                }

                // Try CommonJS require at call time (avoids bundler static analysis)
                try {

                    // eslint-disable-next-line no-new-func
                    const req = Function('return require')();
                    const nodeCrypto = req('crypto');


                    return nodeCrypto.randomBytes(size);

                } catch (e) {

                    // Try Web Crypto (Node >= 15 / browsers)
                    if (globalThis && globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function') {

                        const array = new Uint8Array(size);

                        globalThis.crypto.getRandomValues(array);
                        if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {

                            return Buffer.from(array);

                        }

                        return array;

                    }
                    throw new Error('No secure random source available');

                }

            }
        };

    }

    return {
        "randomBytes": (size) => {

            const array = new Uint8Array(size);

            if (typeof globalThis !== 'undefined' && globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function') {

                globalThis.crypto.getRandomValues(array);

            } else if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.getRandomValues === 'function') {

                window.crypto.getRandomValues(array);

            } else {

                throw new Error('No secure random source available');

            }

            if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {

                return Buffer.from(array);

            }

            return array;

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

        // If EventEmitter wasn't resolved earlier, try to require at runtime
        if (EventEmitter) {

            return EventEmitter;

        }
        try {

            // eslint-disable-next-line no-new-func
            const req = Function('return require')();
            const events = req('events');


            return events.EventEmitter;

        } catch (e) {

            return EventEmitterDummy;

        }

    }

    return EventEmitterDummy;

}
// ...existing code...

export {platformCrypto, platformEmitEvent};
