const {isUrlExtValid} = require("url-assist");
const {getTypeof} = require("structkit");

/**
 * Request initialize
 *
 * @since 1.0.1
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * importScipt("http://localhost:4040/")
 * // => Promise<any>
 */
function amdLocal (url, config) {

    let isValidExt = false;
    const zero = 0;

    if (typeof document !== "undefined") {

        const headHtm = document.getElementsByTagName('head');

        if (isUrlExtValid(url, "js")) {

            isValidExt = true;
            const ps = document.createElement('script');
            const script = document.getElementsByTagName('script');

            ps.type = 'text/javascript';
            ps.src = url;
            ps.async = true;
            ps.onload = function (err) {

                handleCallback(err, config);

            };

            ps.onerror = function (err) {

                handleCallback(err, config);

            };

            if (headHtm.length >zero) {

                headHtm[zero].appendChild(ps);

            }
            if (headHtm.length === zero && script.length > zero) {

                script[zero].appendChild(ps);

            }

        }

        if (isUrlExtValid(url, "css")) {

            isValidExt = true;

            if (headHtm.length > zero) {

                const link = document.createElement("link");

                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = url;
                headHtm[zero].appendChild(link);

                link.onload = function (err) {

                    handleCallback(err, config);

                };

                link.onerror = function (err) {

                    handleCallback(err, config);

                };
                if (headHtm.length >zero) {

                    headHtm[zero].appendChild(link);

                }

            }

        }

    }

    if (!isValidExt) {

        throw new Error("This library supported css and js");

    }

}

/**
 * Handle callback
 *
 * @since 1.0.1
 * @category request
 * @param {string} data The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * handleCallback('error',()=>{})
 * // => Promise<any>
 */
function handleCallback (data, config) {

    if (getTypeof(config) === "function") {

        config(data);

    }

}
exports.amdLocal = amdLocal;
