export default Requests;
/**
 * A getkit intiator
 * @category Seq
 * @class
 * @param {any} api request body
 * @param {any} config request body
 * @name getKit
 */
declare function Requests(api: any, config: any): void;
declare class Requests {
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
    /**
     * Request Get
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
    get(path: any, subconfig: any): Promise<any>;
    /**
     * Request Delete
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
    delete(path: any, subconfig: any): Promise<any>;
    /**
     * Request Post
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
    post(path: any, subconfig: any): Promise<any>;
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
    options(path: any, subconfig: any): Promise<any>;
    /**
     * Request Put
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
    put(path: any, subconfig: any): Promise<any>;
    /**
     * Request Patch
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
    patch(path: any, subconfig: any): Promise<any>;
}
