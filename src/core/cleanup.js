/**
 * Is Exact
 *
 * @since 0.6
 * @category Seq
 * @param {string} path The first number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 */
function appendPrefxPath (path) {

    if (!(/^\//g).test(path)) {

        return "/"+path;

    }

    return path;

}

exports.appendPrefxPath = appendPrefxPath;
