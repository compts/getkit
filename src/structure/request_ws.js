const {loaderWebsocket} = require("../core/referenceRequest");

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
    this.subMethod = {};
    this.loaderWS = loaderWebsocket(this.api, this.config, this.subMethod);
    console.log(this.loaderWS,"loaderWS here");
}

RequestsWs.prototype.send = (msg) => {

    //this.loaderWS.send(msg);

};
RequestsWs.prototype.close = () => {

    //this.loaderWS.close();

};


module.exports = RequestsWs;
