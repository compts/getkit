const {indexOf} = require("structkit");
const {negOne, zero, one, two, three, four} = require("../config/defaultValue");

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

    return indexOf([
        one,
        two,
        three
    ], checkEnvironmentStatus())!==negOne;

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

    return indexOf([four], checkEnvironmentStatus())!==negOne;

}


exports.checkEnvironmentStatus=checkEnvironmentStatus;
exports.isAjax=isAjax;
exports.isNodejsEnv=isNodejsEnv;
