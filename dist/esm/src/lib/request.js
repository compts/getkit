import {qsStringify} from 'url-assist';

import {indexOf, getTypeof, parseString} from 'structkit';

import {zero} from '../config/defaultValue.js';

/**
 * Define request header to its parameter
 *
 * @since 0.6.0
 * @category environment
 * @param {any} param The request parameter
 * @param {any} header The request header.
 * @returns {any} Returns the date in query string
 * @example
 *
 * setRequestParameter({'as':1}, {'as':1})
 * // => as=2
 */
function setRequestParameter (param, header) {

    if (typeof FormData !== "undefined") {

        if (param instanceof FormData) {

            return param;

        }

    }

    if (indexOf(["application/json"], header["content-type"]) >= zero && indexOf([
        "json",
        "array"
    ], getTypeof(param)) >= zero) {

        return parseString(param);

    }

    return qsStringify(param);

}

export {setRequestParameter};
