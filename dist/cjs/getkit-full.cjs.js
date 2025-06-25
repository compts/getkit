const _stk = require('structkit');
const urs = require('url-assist');
const gtk = exports;

/**
 * Get request host details
 *
 * @since 0.6.0
 * @category Seq
 * @param {string} host The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * domainDetails('https://example.com')
 *  => {
 *            "domainDetails": {
 *                "domain": "example",
 *                "domainWithTld": "example.com",
 *               "subdomain": "www",
 *                 "tld": "com"
 *            },
 *            "hash": "",
 *            "hostname": 'www.example.com',
 *            "href": 'https://www.example.com',
 *            "password": "",
 *            "pathname": "",
 *            "port": "",
 *            "protocol": "https",
 *            "search": '',
 *            "user": ''
 *         }
 */
function domainDetails (host) {

    return urs.getHostDetails(host);

}

/**
 * Get default host details if the developer has not provided it
 *
 * @since 0.6.0
 * @category Seq
 * @returns {any} Returns the total.
 * @example
 *
 * hostDetails ()
 * // => {
 *        "baseUrl": "http://localhost:4040",
 *        "headers": {},
 *        "type": "http"
 *    }
 */
function hostDetails () {

    if (typeof location !=="undefined") {

        return {
            "baseUrl": location.origin,
            "headers": {},
            "type": "ajax"
        };

    }

    return {
        "baseUrl": "http://localhost:4040",
        "headers": {},
        "type": "http"
    };

}

/**
 * Get the segment path to make whole url
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getSegmentPath(config, '/as')
 * // => http://example.com/as
 */
function getSegmentPath (config, path) {

    if (config.href === path) {

        if (urs.isHttpProtocolValid(path)) {

            return path;

        }

        return urs.joinUrlPath(config.protocol+":/", path);

    }

    if (urs.isHttpProtocolValid(path)) {

        return path;

    }

    if (urs.isHttpProtocolValid(config.href)) {

        return urs.joinUrlPath(config.href, path);

    }

    return urs.joinUrlPath(config.protocol+":/", config.href, path);

}

/**
 * Get the details for http adapter
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The config details
 * @param {any} subconfig The subconfig details.
 * @param {any} method The request method.
 * @returns {any} Returns the details.
 * @example
 *
 * getRequestDefaultConfig (config, subconfig, "get")
 * // => {}
 */
function getRequestDefaultConfig (config, subconfig, method) {

    const referenceConfig = {
        "data": {},
        "header": {},
        "isJson": false,
        "onDownloadProgress": null,
        "onUploadProgress": null,
        "query": {},
        "timeout": 0,
        "withCredential": false
    };

    referenceConfig.setRequest= function (data) {

        return data;

    };

    referenceConfig.setResponse= function (data) {

        return data;

    };

    let initialConfig = _stk.varExtend(config, subconfig);

    if (_stk.has(subconfig)) {

        initialConfig = _stk.varExtend(subconfig, config);

    }

    const referenceValue = _stk.varExtend(referenceConfig, initialConfig);

    if (method !== "get") {

        if (referenceValue.isJson) {

            referenceValue.header["content-type"] = "application/json";

        }
        if (_stk.has(referenceValue.header, "content-type") ===false) {

            referenceValue.header["content-type"] = "application/x-www-form-urlencoded";

        }

    }

    return referenceValue;

}

const negOne = -1;
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;

/**
 * Check if object or value
 *
 * @since 0.5.0
 * @category environment
 * @returns {number} Returns the status number.
 * @example
 *
 * checkEnvironmentStatus()
 * // => 1
 */
function checkEnvironmentStatus () {

    let status = zero;

    if (typeof XMLHttpRequest !== "undefined" && status === zero) {

        status = one;

    }
    if (typeof ActiveXObject !== "undefined" && status === zero) {

        status = two;

    }
    if (typeof XDomainRequest !== "undefined" && status === zero) {

        status = three;

    }
    if (typeof process !== "undefined" && status === zero) {

        status = four;

    }

    return status;

}

/**
 * To check if it`s browser environment
 *
 * @since 0.5.0
 * @category environment
 * @returns {boolean} Returns if it`s valid.
 * @example
 *
 * isAjax()
 * // => true
 */
function isAjax () {

    return _stk.indexOf([
        one,
        two,
        three
    ], checkEnvironmentStatus())!==negOne;

}

/**
 * To check if it`s nodejs environment
 *
 * @since 0.5.0
 * @category environment
 * @returns {boolean} Returns if it`s valid.
 * @example
 *
 * isNodejsEnv()
 * // => true
 */
function isNodejsEnv () {

    return _stk.indexOf([four], checkEnvironmentStatus())!==negOne;

}

/* eslint-disable no-empty-function */
/**
 * A getkit intiator
 * @class
 * @name DummyReq
 */
function DummyReq () {

}

/**
 * To append the pathname with slash if not found
 *
 * @since 0.6.0
 * @category Seq
 * @param {string} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * appendPrefxPath("test")
 * // => /test
 */
function appendPrefxPath (path) {

    if (!(/^\//g).test(path)) {

        return "/"+path;

    }

    return path;

}

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

    if (_stk.indexOf(["application/json"], header["content-type"]) >= zero && _stk.indexOf([
        "json",
        "array"
    ], _stk.getTypeof(param)) >= zero) {

        return _stk.parseString(param);

    }

    return urs.qsStringify(param);

}

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

    if (_stk.indexOf(["application/json"], header["content-type"]
        ?header["content-type"].toLowerCase()
        :"") >= zero) {

        return _stk.parseJson(param.trim());

    }

    if (config.isJson) {

        return _stk.parseJson(param.trim());

    }

    return param;

}

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

    if (_stk.isEmpty(config.query)) {

        options.qs = config.query;

    }

    const dataRequest = config.setRequest({

        "data": config.data,
        "header": config.header

    });

    if (_stk.getTypeof(dataRequest) ==="json") {

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

                    if (_stk.getTypeof(dataResponse) === "json") {

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

adapterHttp=httpInit

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

    _stk.each(header, function (val, key) {

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

    if (_stk.isEmpty(config.query) === false) {

        definePath = definePath+"/?"+urs.qsStringify(config.query);

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

                    if (_stk.getTypeof(dataResponse) === "json") {

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

            // Sxhttp.timeout = config.timeout;

            // Sxhttp.ontimeout = function (e) {

            // XMLHttpRequest timed out. Do something here.

            // S};

            if (_stk.getTypeof(config.onDownloadProgress) === "function") {

                xhttp.addEventListener('progress', config.onDownloadProgress);

            }

            if (_stk.getTypeof(config.onUploadProgress) === "function" && xhttp.upload) {

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

adapterXhr=xhrInit

/**
 * Check the environment if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} config The config of url to be request
 * @returns {any} Return details of environment.
 * @example
 *
 * requestApi({})
 * // => {}
 */
function requestApi (config) {

    if (isAjax()) {

        if (window.XMLHttpRequest) {

            return {
                "class": new XMLHttpRequest(),
                "detail": config.detail,
                "status": "ajax"

            };

        }

        if (window.ActiveXObject) {

            return {
                "class": new ActiveXObject("Microsoft.XMLHTTP"),
                "detail": config.detail,
                "status": "ajax"
            };

        }

    }

    if (isNodejsEnv() && typeof http !== "undefined" && typeof https !== "undefined") {

        if (config.isHttps) {

            return {
                "class": https,
                "detail": config.detail,
                "status": "http"
            };

        }

        return {
            "class": http,
            "detail": config.detail,
            "status": "http"
        };

    }

    return {
        "class": new DummyReq(),
        "detail": config.detail,
        "status": "dummy"
    };

}

/**
 * To initiate what environment to use, if nodejs or browser
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The api details.
 * @param {any} config The config details.
 * @param {any} subconfig The subconfig details.
 * @param {any} path The path details.
 * @param {any} method The method details.
 * @returns {any} Returns the class.
 * @example
 *
 * loaderApi(api, config, subconfig, "/path", "get")
 * // => <class>
 */
function loaderApi (api, config, subconfig, path, method) {

    const defaultPath =getSegmentPath(api.detail, path);

    const defaultRequestDefaultConfig = getRequestDefaultConfig(config, subconfig, method);

    if (urs.isHttpProtocolValid(defaultPath) === false) {

        return Promise.reject(String("Invalid Http Protocol"));

    }

    if (api.status ==="ajax") {

        return adapterXhr(api, defaultRequestDefaultConfig, defaultPath, method);

    }
    if (api.status ==="http") {

        return adapterHttp(api, defaultRequestDefaultConfig, defaultPath, method);

    }

    return api.class;

}

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
function Requests (api, config) {

    this.api =api;
    this.config =config;

}

/**
 * Request Get
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.get = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "get");

};

/**
 * Request Delete
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.delete = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "delete");

};

/**
 * Request Post
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.post = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "post");

};

/**
 * Request Options
 *
 * @since 1.0.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.options = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "options");

};

/**
 * Request Put
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.put = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "put");

};

/**
 * Request Patch
 *
 * @since 0.5.0
 * @category request
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.patch = function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "patch");

};

/**
 * It was design to single request type only
 *
 * @since 0.6.0
 * @category environment
 * @param {any} details The details url
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * singleRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function singleRequest (details, config) {

    const validHttp = urs.isHttps(details.hostArgument);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp

    });

    const init = new Requests(api, config);

    return init;

}

/**
 * It was design for multiple request type
 *
 * @since 0.6.0
 * @category environment
 * @param {any} config The configuration set by developer
 * @returns {any} Return config details.
 * @example
 *
 * configRequest({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequest (config) {

    const host = hostDetails();
    const detailsExtend = _stk.varExtend(host, config);

    const details = domainDetails(detailsExtend.baseUrl);

    const validHttp = urs.isHttps(details.baseUrl);

    const api = requestApi({
        "detail": details,
        "isHttps": validHttp
    });

    const init = new Requests(api, config);

    return init;

}

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

    let isValidExt = false;
    const zero = 0;

    if (typeof document !== "undefined") {

        const headHtm = document.getElementsByTagName('head');

        if (urs.isUrlExtValid(url, "js")) {

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

        if (urs.isUrlExtValid(url, "css")) {

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
 * @since 0.5.0
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

    if (_stk.getTypeof(config) === "function") {

        config(data);

    }

}

/**
 * Request Get
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * nget('/')
 * // => Promise<any>
 */

gtk.nget=function (url, config) {

    const details = domainDetails(url);

    const init = singleRequest(details, config);

    return init.get(url, config);

};

/**
 * Request Delete
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * ndelete('/')
 * // => Promise<any>
 */

gtk.ndelete=function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.delete(url, config);

};

/**
 * Request Post
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * npost('/')
 * // => Promise<any>
 */

gtk.npost=function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.post(url, config);

};

/**
 * Request Options
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * noptions('/')
 * // => Promise<any>
 */

gtk.noptions=function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.options(url, config);

};

/**
 * Request Put
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * nput('/')
 * // => Promise<any>
 */

gtk.nput=function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.put(url, config);

};

/**
 * Request Patch
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * npatch('/')
 * // => Promise<any>
 */

gtk.npatch=function (url, config) {

    const details = domainDetails(url);
    const init = singleRequest(details, config);

    return init.patch(url);

};

/**
 * Request initialize
 *
 * @since 0.6.0
 * @category request
 * @param {any} [config] The request config
 * @returns {any} Returns Promise for response.
 * @example
 *
 * initialize({"baseUrl": "http://localhost:4040/"})
 * // => Promise<any>
 */

gtk.initialize=function (config) {

    const init = configRequest(config);

    return init;

};

/**
 * Importing JS in CDN, this is experimental feature
 *
 * @since 0.6.0
 * @category request
 * @param {string} url The url of request
 * @param {any} [config] The request config
 * @returns {Promise<any>} Returns Promise for response.
 * @example
 *
 * importScipt("http://localhost:4040/")
 * // => Promise<any>
 */

gtk.importScipt=function (url, config) {

    if (typeof document !== "undefined") {

        amdLocal(url, config);

        return;

    }

    throw new Error("This is supported only in browser, but we are working nodejs compability");

};


 //end of file