const {indexOf, parseJson} = require("structkit");
const {zero} = require("../config/defaultValue");


/**
 * Request config
 *
 * @since 0.6.0
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
function setRespondData (param, header, config) {

    if (indexOf(["application/json"], header["content-type"]
        ?header["content-type"].toLowerCase()
        :"") >= zero) {

        return parseJson(param.trim());

    }

    if (config.isJson) {

        return parseJson(param.trim());

    }

    return param;

}
exports.setRespondData = setRespondData;
