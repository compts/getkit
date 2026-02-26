const {loaderWebsocket} = require("../../lib/ws/referenceRequest");

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
function RequestsWs (api, config) {

    this.api =api;
    this.config =config;
    const subMethod = {};
    const loaderWS = loaderWebsocket(this.api, this.config, subMethod);

    return new RequestsWsDummy(loaderWS, subMethod);

}

/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} subMethod request body
 * @name getKit
 */
function RequestsWsDummy (api, subMethod) {


    this.send = (msg) => {

        console.log("Send message:", api.readyState, msg);
        //  Api.ws.send(msg);

    };
    this.received = () => {

        const main = this;

        subMethod.onmessage(function (data) {

            console.log("Received message:", data);

            main.call(main, data);

        });

    };
    this.close = () => {

        api.ws.close();

    };

}


module.exports = RequestsWs;
