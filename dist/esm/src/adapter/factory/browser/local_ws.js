import {toBoolean, isEmpty} from 'structkit';

/**
 * Initiation of web websocket
 *
 * @since 0.5.0
 * @category environment
 * @param {any} api The first number in an addition.
 * @param {any} config The first number in an addition.
 * @param {any} subMethod The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * httpInit({'as':1}, 'as',2)
 * // => {'as':2}
 */
function LocalWs (api, config, subMethod) {

    let definePath = config.protocol+ '://' + config.hostname;

    if (isEmpty(config.port) === false) {

        definePath = definePath+ ':' + config.port;

    } else {

        definePath = definePath+ ':' + (api.isHttps
            ? 443
            : 80);

    }

    this.ws = new api.ClassSocket(definePath);

    this.ws.onopen = () => {

        this.readyState = toBoolean(this.ws.readyState);
        console.log('Connected to WebSocket server');

    };

    this.ws.onmessage = (event) => {

        //    console.log('Received message:', event.data);
        subMethod.onmessage(event.data);

    };

    this.ws.onclose = () => {

        this.readyState = toBoolean(this.ws.readyState);
        console.log('Disconnected from WebSocket server');

    };

    this.ws.onerror = (error) => {

        console.error('WebSocket error:', error);

    };

    this.readyState = toBoolean(this.ws.readyState);

    return this;

}

export default LocalWs;

