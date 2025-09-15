import {indexOfExist} from 'structkit';

import {zero, one, two, three, four, five} from './defaultValue.js';

/**
 * Check if object or value
 *
 * @since 0.5.0
 * @category environment
 * @returns {number} Returns the status number.
 * @example
 *
 * checkEnvironmentStatus()
 * // => 1
 */
function checkEnvironmentStatus () {

    let status = zero;

    if (typeof XMLHttpRequest !== "undefined" && status === zero) {

        status = one;

    }
    if (typeof ActiveXObject !== "undefined" && status === zero) {

        status = two;

    }
    if (typeof XDomainRequest !== "undefined" && status === zero) {

        status = three;

    }
    if (typeof process !== "undefined" && status === zero) {

        status = four;

    }

    if (typeof WebSocket !== "undefined" && status === zero) {

        status = five;

    }

    return status;

}

/**
 * To check if it`s browser environment
 *
 * @since 0.5.0
 * @category environment
 * @returns {boolean} Returns if it`s valid.
 * @example
 *
 * isAjax()
 * // => true
 */
function isAjax () {

    return indexOfExist([
        one,
        two,
        three
    ], checkEnvironmentStatus());

}

/**
 * To check if it`s nodejs environment
 *
 * @since 0.5.0
 * @category environment
 * @returns {boolean} Returns if it`s valid.
 * @example
 *
 * isNodejsEnv()
 * // => true
 */
function isNodejsEnv () {

    return indexOfExist([four], checkEnvironmentStatus());

}

export {checkEnvironmentStatus, isAjax, isNodejsEnv};
