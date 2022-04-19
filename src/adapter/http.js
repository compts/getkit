const {domainDetails} = require("../core/getType");

/**
 * Check if object or value
 *
 * @since 1.0.1
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
        "path": detail.pathname,
        "port": detail.port


    };


    const myPromise = new Promise((resolve, reject) => {

        try {

            req.get(options, function (res) {

                const list_chunk_data = [];

                res.on('data', function (chunk_data) {

                    list_chunk_data.push(chunk_data.toString());

                });
                res.on('end', function () {

                    resolve({
                        "data": list_chunk_data.join().toString()
                    });

                });

            }).on('error', function (error) {


                reject(error);

            });

        } catch (err) {

            reject(err);

        }

    });

    return myPromise;

}

module.exports = httpInit;
