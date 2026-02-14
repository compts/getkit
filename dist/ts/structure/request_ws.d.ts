export default RequestsWs;
/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
declare function RequestsWs(api: any, config: any): RequestsWsDummy;
declare class RequestsWs {
    /**
     * A getkit intiator
     * @category Seq
     * @class
     * @param {any} api request body
     * @param {any} config request body
     * @name getKit
     */
    constructor(api: any, config: any);
    api: any;
    config: any;
}
/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} subMethod request body
 * @name getKit
 */
declare function RequestsWsDummy(api: any, subMethod: any): void;
declare class RequestsWsDummy {
    /**
     * A getkit intiator
     * @category Seq
     * @class
     * @param {any} api request body
     * @param {any} subMethod request body
     * @name getKit
     */
    constructor(api: any, subMethod: any);
    send: (msg: any) => void;
    received: () => void;
    close: () => void;
}
