const {qsStringify} = require("url-assist");
const {indexOf, getTypeof} = require("structkit");

/**
 * Request config
 *
 * @since 1.0.1
 * @category environment
 * @param {any} param The first number in an addition.
 * @param {any} header The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function setRequestParameter (param, header) {

    if (typeof FormData !== "undefined") {

        if (param instanceof FormData) {

            return param;

        }

    }

    if (indexOf(["application/json"], header["content-type"]) >= 0 && indexOf(["json", "array"], getTypeof(param)) >= 0) {

        return JSON.stringify(param);

    }

    return qsStringify(param);

}
exports.setRequestParameter = setRequestParameter;
