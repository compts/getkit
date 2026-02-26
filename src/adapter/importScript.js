const {isUrlExtValid} = require("url-assist");
const {varExtend, getUniq} = require("structkit");
const {zero} = require("../config/defaultValue");

/**
 * Request initialize
 *
 * @since 0.5.0
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

    const varConf = varExtend({"enableCache": false}, config);

    if (typeof document !== "undefined") {

        const headHtm = document.getElementsByTagName('head');

        if (isUrlExtValid(url, "js")) {

            const myPromiseScript = new Promise((resolve, reject) => {

                const ps = document.createElement('script');
                const script = document.getElementsByTagName('script');

                ps.type = 'text/javascript';
                ps.src = url+(varConf.enableCache
                    ?"q="+getUniq()
                    :"");
                ps.async = true;
                ps.onload = function (err) {

                    resolve(err);

                };

                ps.onerror = function (err) {

                    reject(err);

                };

                if (headHtm.length >zero) {

                    headHtm[zero].appendChild(ps);

                }
                if (headHtm.length === zero && script.length > zero) {

                    script[zero].appendChild(ps);

                }

            });


            return myPromiseScript;

        }

        if (isUrlExtValid(url, "css")) {

            const myPromiseStyle = new Promise((resolve, reject) => {

                if (headHtm.length > zero) {

                    const link = document.createElement("link");

                    link.type = "text/css";
                    link.rel = "stylesheet";
                    link.href = url+(varConf.enableCache
                        ?"q="+getUniq()
                        :"");
                    headHtm[zero].appendChild(link);

                    link.onload = function (err) {

                        resolve(err);

                    };

                    link.onerror = function (err) {

                        reject(err);

                    };
                    if (headHtm.length >zero) {

                        headHtm[zero].appendChild(link);

                    }

                } else {

                    throw new Error("No head tag found");

                }

            });

            return myPromiseStyle;


        }

    }


    throw new Error("This library supported css and js");


}

exports.amdLocal = amdLocal;
