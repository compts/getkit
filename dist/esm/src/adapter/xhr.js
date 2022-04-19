import {each, indexOf, delimiter, getTypeof, getValue, getKey} from 'structkit';

import {qsStringify} from 'url-assist';

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} xhttp The first number in an addition.
 * @param {any} header The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function setRequestHeader (xhttp, header) {

    each(header, function (key, val) {

        xhttp.setRequestHeader(key, val);

    });

}

/**
 * Check if object or value
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

    // Console.log(param,getTypeof(param),"$$param",delimiter(param,"=","&"));
    if (param instanceof FormData) {

        return param;

    }

    if (indexOf(["application/json"], header["content-type"]) >= 0 && indexOf(["json" ,"array"], getTypeof(param)) >= 0) {

        return JSON.stringify(param);

    }

    return qsStringify(param);

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @param {any} method The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function xhrInit (api, config, path, method) {

    const xhttp = api.class;

    const myPromise = new Promise((resolve, reject) => {

        try {

            xhttp.onreadystatechange = function () {
                console.log(this,":")
                if (this.readyState === 4) {

                    resolve({
                        "data": this.response
                    });

                }

            };
            xhttp.open(method, path, method !== "get");
            setRequestHeader(xhttp, config.header);
            if (method === "get") {

                xhttp.send();

            } else {

                xhttp.send(setRequestParameter(config.data, config.header));

            }

        } catch (err) {

            reject(err);

        }

    });

    return myPromise;

}

export default  xhrInit;

