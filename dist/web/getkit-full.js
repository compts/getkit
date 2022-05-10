(function(global){
global.gtk={}

/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} host The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
function domainDetails (host) {

    return urs.getHostDetails(host);

}

/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @returns {any} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
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
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} path The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function getSegmentPath (config, path) {

    if (config.hostArgument === path) {

        if (urs.isHttpProtocolValid(path)) {

            return path;

        }

        return config.protocol+"://"+path;

    }

    if (urs.isHttpProtocolValid(config.hostArgument)) {

        return urs.joinUrlPath(config.hostArgument, path);

    }

    var defaultPath = urs.joinUrlPath(config.protocol+"://"+config.hostname, config.pathname);

    if (_stk.isEmpty(config.port) === false) {

        defaultPath += ":"+config.port;

    }
    defaultPath =urs.joinUrlPath(defaultPath, path);

    return defaultPath;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @param {any} method The first number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function getRequestDefaultConfig (config, subconfig, method) {

    var referenceConfig = {
        "data": {},
        "header": {},
        "isJson": false,
        "onDownloadProgress": null,
        "onUploadProgress": null,
        "timeout": 0,
        "withCredential": false
    };

    referenceConfig.setRequest= function (data) {

        return data;

    };

    referenceConfig.setResponse= function (data) {

        return data;

    };

    var initialConfig = _stk.varExtend(config, subconfig);

    if (_stk.has(subconfig)) {

        initialConfig = _stk.varExtend(subconfig, config);

    }

    var referenceValue = _stk.varExtend(referenceConfig, initialConfig);

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

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @returns {number} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function checkEnvironmentStatus () {

    var status = 0;

    if (typeof XMLHttpRequest !== "undefined" && status === 0 ) {

        status = 1;

    }
    if (typeof ActiveXObject !== "undefined" && status === 0 ) {

        status = 2;

    }
    if (typeof XDomainRequest !== "undefined" && status === 0 ) {

        status = 3;

    }
    if (typeof process !== "undefined" && status === 0 ) {

        status = 4;

    }

    return status;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function isAjax () {

    return _stk.indexOf([1, 2, 3], checkEnvironmentStatus())!==-1;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function isNodejsEnv () {

    return _stk.indexOf([4], checkEnvironmentStatus())!==-1;

}

/**
 * A getkit intiator
 * @class
 * @name DummyReq
 */
function DummyReq() {

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

    // Console.log(param,_stk.getTypeof(param),"$$param",delimiter(param,"=","&"));
    if (typeof FormData !== "undefined") {

        if (param instanceof FormData) {

            return param;

        }

    }

    if (_stk.indexOf(["application/json"], header["content-type"]) >= 0 && _stk.indexOf(["json" ,"array"], _stk.getTypeof(param)) >= 0) {

        return JSON.stringify(param);

    }

    return urs.qsStringify(param);

}

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

    if (_stk.indexOf(["application/json"], header["content-type"].toLocaleLowerCase()) >= 0) {

        return JSON.parse(param.trim());

    }

    if (config.isJson) {

        return JSON.parse(param.trim());

    }

    return param;

}

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

    var req = api.class;

    var detail = domainDetails(path);

    var options = {
        "headers": config.header,
        "hostname": detail.hostname,
        "method": methods,
        "path": detail.pathname,
        "port": detail.port

    };

    var dataRequest = config.setRequest({

        "data": config.data,
        "header": config.header

    });

    if (_stk.getTypeof(dataRequest) ==="json") {

        options.headers = dataRequest.header;

    }

    var myPromise = new Promise((resolve, reject) => {

        try {

            var str = '';
            var callback = function (response) {

                response.on('data', function (chunk) {

                    str += chunk;

                });

                response.on('end', function () {

                    var outputResponse = {
                        "data": setRespondData(str, response.headers, config),
                        "header": response.headers,
                        "status": response.statusCode
                    };

                    var dataResponse = config.setResponse(outputResponse);

                    if (_stk.getTypeof(dataResponse) === "json") {

                        resolve(dataResponse);

                    } else {

                        resolve(outputResponse);

                    }

                });

            };

            var reqServer = req.request(options, callback);

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

    _stk.each(header, function (key, val) {

        xhttp.setRequestHeader(key, val);

    });

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

    var xhttp = api.class;

    var myPromise = new Promise((resolve, reject) => {

        try {

            xhttp.withCredential = config.withCredential;

            xhttp.onreadystatechange = function () {

                var rawTextResponseHeader = this.getAllResponseHeaders();

                // Convert the header string into an array  of individual headers

                var arr = rawTextResponseHeader.trim().split(/[\r\n]+/);

                // Create a map of header names to values
                var headerMap = {};

                arr.forEach(function (line) {

                    var parts = line.split(': ');
                    var header = parts.shift();
                    var value = parts.join(': ');

                    headerMap[header] = value;

                });

                if (this.readyState === 4) {

                    var outputResponse = {
                        "data": setRespondData(this.response, headerMap, config),
                        "header": headerMap,
                        "status": this.status
                    };
                    var dataResponse = config.setResponse(outputResponse);

                    if (_stk.getTypeof(dataResponse) === "json") {

                        resolve(dataResponse);

                    } else {

                        resolve(outputResponse);

                    }

                }

            };

            var dataRequest = config.setRequest({

                "data": config.data,
                "header": config.header

            });

            xhttp.open(method, path, method !== "get");

            if (_stk.getTypeof(dataRequest) ==="json") {

                setRequestHeader(xhttp, dataRequest.header);

            } else {

                setRequestHeader(xhttp, config.header);

            }
           // xhttp.timeout = config.timeout;

           // xhttp.ontimeout = function (e) {
                // XMLHttpRequest timed out. Do something here.
           // };

           
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
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
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
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @param {any} path The first number in an addition.
 * @param {any} method The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function loaderApi (api, config, subconfig, path, method) {

    var defaultPath =getSegmentPath(api.detail, path);

    var defaultRequestDefaultConfig = getRequestDefaultConfig(config, subconfig, method);

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
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.get =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "get");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.delete =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "delete");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.post =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "post");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.options =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "options");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.put =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "put");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} path The first number in an addition.
 * @param {any} subconfig The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
Requests.prototype.patch =function (path, subconfig) {

    return loaderApi(this.api, this.config, subconfig, path, "patch");

};

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} details The first number in an addition.
 * @param {any} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function singleRequest (details, config) {

    var validHttp = urs.isHttps(details.protocol);

    var api = requestApi({
        "detail": details,
        "isHttps": validHttp

    });

    var init = new Requests(api, config);

    return init;

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function configRequest (config) {

    var host = hostDetails();
    var detailsExtend = _stk.varExtend(host, config);

    var details = domainDetails(detailsExtend.baseUrl);

    var validHttp = urs.isHttps(details.baseUrl);

    var api = requestApi({
        "detail": details,
        "isHttps": validHttp
    });

    var init = new Requests(api, config);

    return init;

}

/**
 * Request Get
 *
 * @since 1.0.1
 * @category environment
 * @param {string} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Get('/')
 * // => {'as':2}
 */
gtk.Get=function (url, config) {

    var details = domainDetails(url);
    var init = singleRequest(details, config);

    return init.get(url, config);

};

/**
 * Request Delete
 *
 * @since 1.0.1
 * @category environment
 * @param {string} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Delete('/')
 * // => {'as':2}
 */
gtk.Delete=function (url, config) {

    var details = domainDetails(url);
    var init = singleRequest(details, config);

    return init.delete(url, config);

};

/**
 * Request Post
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Post('/')
 * // => {'as':2}
 */
gtk.Post=function (url, config) {

    var details = domainDetails(url);
    var path = getSegmentPath(details);
    var init = singleRequest(details, config);

    return init.post(path, config);

};

/**
 * Request Options
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Options('/')
 * // => {'as':2}
 */
gtk.Options=function (url, config) {

    var details = domainDetails(url);
    var init = singleRequest(details, config);

    return init.options(url, config);

};

/**
 * Request Put
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Put('/')
 * // => {'as':2}
 */
gtk.Put=function (url, config) {

    var details = domainDetails(url);
    var init = singleRequest(details, config);

    return init.put(url, config);

};

/**
 * Request Patch
 *
 * @since 1.0.1
 * @category environment
 * @param {any} url The first number in an addition.
 * @param {any} [config] The first number in an addition.
 * @returns {Promise<any>} Returns the total.
 * @example
 *
 * Patch('/')
 * // => {'as':2}
 */
gtk.Patch=function (url, config) {

    var details = domainDetails(url);
    var init = singleRequest(details, config);

    return init.patch(url);

};

/**
 * Request initialize
 *
 * @since 1.0.1
 * @category environment
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * initialize({"baseUrl": "http://localhost:4040/"})
 * // => {'as':2}
 */
gtk.initialize=function (config) {

    var init = configRequest(config);

    return init;

};

})(typeof window !== "undefined" ? window : this);