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
export function checkEnvironmentStatus(): number;
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
export function isAjax(): boolean;
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
export function isNodejsEnv(): boolean;
