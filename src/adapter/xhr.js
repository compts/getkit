const {each, getTypeof, isEmpty} = require("structkit");
const {setRequestParameter} = require("../lib/request");
const {setRespondData} = require("../lib/response");
const {qsStringify} = require("url-assist");
const {four} = require("../config/defaultValue");


/**
 * Adding preferred request header
 *
 * @since 0.5.0
 * @category environment
 * @param {any} xhttp The first number in an addition.
 * @param {any} header The first number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * setRequestHeader(xhr, {'content-type':"text/plain"})
 * // => null
 */
function setRequestHeader (xhttp, header) {

    each(header, function (val, key) {

        xhttp.setRequestHeader(key, val);

    });

}


/**
 * Initiation of ajax http in browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @param {any} method The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * xhrInit(api, config, "/", "get")
 * // => Promise<any>
 */
function xhrInit (api, config, path, method) {

    let definePath = path;

    if (isEmpty(config.query) === false) {

        definePath = definePath+"/?"+qsStringify(config.query);

    }

    const xhttp = api.class;

    const myPromise = new Promise((resolve, reject) => {

        try {

            xhttp.withCredential = config.withCredential;

            xhttp.onreadystatechange = function () {

                const rawTextResponseHeader = this.getAllResponseHeaders();

                // Convert the header string into an array  of individual headers

                const arr = rawTextResponseHeader.trim().split(/[\r\n]+/);

                // Create a map of header names to values
                const headerMap = {};

                arr.forEach(function (line) {

                    const parts = line.split(': ');
                    const header = parts.shift();
                    const value = parts.join(': ');

                    headerMap[header] = value;

                });


                if (this.readyState === four) {

                    const outputResponse = {
                        "data": setRespondData(this.response, headerMap, config),
                        "header": headerMap,
                        "status": this.status
                    };
                    const dataResponse = config.setResponse(outputResponse);

                    if (getTypeof(dataResponse) === "json") {

                        resolve(dataResponse);

                    } else {

                        resolve(outputResponse);

                    }

                }

            };

            const dataRequest = config.setRequest({

                "data": config.data,
                "header": config.header

            });

            xhttp.open(method, definePath, method !== "get");


            setRequestHeader(xhttp, dataRequest.header);

            if (getTypeof(config.onDownloadProgress) === "function") {

                xhttp.addEventListener('progress', config.onDownloadProgress);

            }

            if (getTypeof(config.onUploadProgress) === "function" && xhttp.upload) {

                xhttp.upload.addEventListener('progress', config.onUploadProgress);

            }

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

module.exports = xhrInit;
