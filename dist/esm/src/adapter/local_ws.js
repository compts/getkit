import {each, getTypeof, isEmpty} from 'structkit';

/**
 * Initiation of nodejs http
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * httpInit({'as':1}, 'as',2)
 * // => {'as':2}
 */
function LocalWs (api, config) {

    let definePath = config.protocol+ '://' + config.hostname;

    if (isEmpty(config.port) === false) {

        definePath = definePath+ ':' + config.port;

    }

    this.ws = new api.ClassSocket(definePath);

    this.ws.onopen = () => {
        console.log('Connected to WebSocket server');
    };

    this.ws.onmessage = (event) => {
        console.log('Received message:', event.data);
    };

    this.ws.onclose = () => {
        console.log('Disconnected from WebSocket server');
    };

    this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    return this;

}

LocalWs.prototype.send = (msg) => {

    //this.ws.send(msg);

};
LocalWs.prototype.close = () => {

    //this.ws.close();

};

export default LocalWs;

