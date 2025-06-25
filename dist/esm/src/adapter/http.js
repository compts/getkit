import {domainDetails} from '../core/getType.js';

import {appendPrefxPath} from '../core/cleanup.js';

import {getTypeof, isEmpty} from 'structkit';

import {setRequestParameter} from '../lib/request.js';

import {setRespondData} from '../lib/response.js';

/**
 * Initiation of nodejs http
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @param {any} methods The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function httpInit (api, config, path, methods) {

    const req = api.class;

    const detail = domainDetails(path);

    const options = {
        "headers": config.header,
        "hostname": detail.hostname,
        "method": methods,
        "path": appendPrefxPath(detail.pathname),
        "port": detail.port

    };

    if (isEmpty(config.query)) {

        options.qs = config.query;

    }

    const dataRequest = config.setRequest({

        "data": config.data,
        "header": config.header

    });

    if (getTypeof(dataRequest) ==="json") {

        options.headers = dataRequest.header;

    }

    const myPromise = new Promise((resolve, reject) => {

        try {

            let str = '';
            const callback = function (response) {

                response.on('data', function (chunk) {

                    str += chunk;

                });

                response.on('end', function () {

                    const outputResponse = {
                        "data": setRespondData(str, response.headers, config),
                        "header": response.headers,
                        "status": response.statusCode
                    };

                    const dataResponse = config.setResponse(outputResponse);

                    if (getTypeof(dataResponse) === "json") {

                        resolve(dataResponse);

                    } else {

                        resolve(outputResponse);

                    }

                });

            };

            const reqServer = req.request(options, callback);

            // This is the data we are posting, it needs to be a string or a buffer
            reqServer.write(setRequestParameter(config.data, config.header));
            reqServer.end();

        } catch (err) {

            reject(err);

        }

    });

    return myPromise;

}

export default httpInit;

