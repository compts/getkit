const {indexOf} = require("structkit");

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @returns {number} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function checkEnvironmentStatus () {

    let status = 0;

    if (typeof XMLHttpRequest !== "undefined" && status === 0) {

        status = 1;

    }
    if (typeof ActiveXObject !== "undefined" && status === 0) {

        status = 2;

    }
    if (typeof XDomainRequest !== "undefined" && status === 0) {

        status = 3;

    }
    if (typeof process !== "undefined" && status === 0) {

        status = 4;

    }

    return status;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function isAjax () {

    return indexOf([
        1,
        2,
        3
    ], checkEnvironmentStatus())!==-1;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function isNodejsEnv () {

    return indexOf([4], checkEnvironmentStatus())!==-1;

}


exports.checkEnvironmentStatus=checkEnvironmentStatus;
exports.isAjax=isAjax;
exports.isNodejsEnv=isNodejsEnv;
