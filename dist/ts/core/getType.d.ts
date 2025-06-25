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
export function domainDetails(host: string): any;
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
export function hostDetails(): any;
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
export function getSegmentPath(config: any, path: any): string;
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
export function getRequestDefaultConfig(config: any, subconfig: any, method: any): any;
