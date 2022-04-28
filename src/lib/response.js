const {qsStringify} = require("url-assist");
const {each, indexOf, delimiter, getTypeof, getValue, getKey} = require("structkit");

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} param The first number in an addition.
 * @param {any} header The first number in an addition.
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function setRespondData (param, header ,config) {

    if (indexOf(["application/json"], header["content-type"]) >= 0 && indexOf(["json" ,"array"], getTypeof(param)) >= 0) {

        return JSON.parse(param.trim());

    }

    if (config.isJson) {

        return JSON.parse(param.trim());


    }

    return param;

}
exports.setRespondData = setRespondData;
