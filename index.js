

/**
 * Turns any function into an array filter.
 * @param {Function} fn
 * @return {Function}
 * @api private
 */

function filterify(fn) {
  return function(arr) {
    var cp = [];
    for(var i = 0, l = arr.length; i < l; i++) {
      if(fn(arr[i])) cp.push(arr[i]);
    }
    return cp;
  };
}


/**
 * Filter array.
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array||Function}
 * @api public
 */

module.exports = function(arr, fn) {
	if(typeof arr === 'function') {
		return filterify(arr);
	}
	return filterify(fn)(arr);
};

