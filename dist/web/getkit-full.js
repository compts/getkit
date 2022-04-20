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
 * @param {string} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function isHttps (config) {

    return (/^(https)$/g).test(config);

}

/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category environment
 * @param {string} config The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function checkHttpProtocol (config) {

    return (/^(https|http):\/\//g).test(config);

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

        if (checkHttpProtocol(path)) {

            return path;

        }

        return config.protocol+"://"+path;

    }

    if (checkHttpProtocol(config.hostArgument)) {

        return config.hostArgument;

    }

    var defaultPath = config.protocol+"://"+config.hostname;

    if (_stk.isEmpty(config.port) === false) {

        defaultPath += ":"+config.port;

    }
    defaultPath += (/^\//g).test(path)
        ? path
        : "/"+path;

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

    console.log(config, subconfig, method, "::config, subconfig, method");

    var referenceConfig = {
        "data": {},
        "header": {},
        "isJsonRequest": false
    };
    var initialConfig = _stk.varExtend(config, subconfig);

    if (_stk.has(subconfig)) {

        initialConfig = _stk.varExtend(subconfig, config);

    }

    var referenceValue = _stk.varExtend(referenceConfig, initialConfig);

    if (method !== "get") {

        if (referenceValue.isJsonRequest) {

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

    var myPromise = new Promise((resolve, reject) => {

        try {

            req.get(options, function (res) {

                var list_chunk_data = [];

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

adapterHttp=httpInit;

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
 * @param {any} param The first number in an addition.
 * @param {any} header The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function setRequestParameter (param, header) {

    // Console.log(param,_stk.getTypeof(param),"$$param",_stk.delimiter(param,"=","&"));
    if (param instanceof FormData) {

        return param;

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

adapterXhr=xhrInit;

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

    var validHttp = isHttps(details.protocol);

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

    var validHttp = isHttps(details.baseUrl);

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