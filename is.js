/* is.js -- convenience object for testing certain types and smoothing out
 * JavaScript weirdness like:
 *
 * 		undefined !== undefined
 * 		typeof /regexp/ == 'object'
 * 		typeof Nan == 'number'
 *
 * et cetera. Nothing earth-shattering, and it's certainly a bunch of rules we
 * should all know; I just wanted to create something simple so I wouldn't have
 * to keep remembering the rules. NOTE: a few types are reserved words, so...
 *
 * 		is.func, is.nan, is.undef, is.nul
 *
 * Just remember that! */

var exports = module.exports = {}

exports.undef = function isUndef (value) {
	return typeof value === 'undefined';
};

exports.empty = function isEmpty (value) {
	return value == null;
};

exports.nul = function isNul (value) {
	return value === null;
};

exports.boolean = function isBoolean (value) {
	return typeof value === 'boolean';
};

exports.nan = function isNan (value) {
	return isNaN(value) && typeof value === 'number';
};

exports.number = function isNumber (value) {
	return typeof value === 'number' && !isNaN(value);
};

exports.integer = function isInteger (value) {
	return value === (value | 0);
};

exports.string = function isString (value) {
	return typeof value === 'string';
};

exports.object = function isObject (value) {
	if (typeof value === 'object') {
		if (value !== null) {
			if (!(value instanceof RegExp)) {
				if (!exports.array(value)) {
					return true;
				}
			}
		}
	}
	return false;
};

exports.array = function isArray (value) {
	if (typeof value === 'object') {
		if (value) {
			if (typeof value.length === 'number' &&
				!(value.propertyIsEnumerable('length')) &&
				typeof value.splice === 'function') {
				return true;
			}
		}
	}
	return false;
};

exports.func = function isFunc (value) {
	return value instanceof Function;
};

exports.regexp = function isRegexp (value) {
	return value instanceof RegExp;
};

exports.inArray = function isInArray (needle, haystack) {
	var i;
	if (!exports.array(haystack)) {
		if (exports.array(this)) {
			haystack = this;
		} else {
			return false;
		}
	}
	if (typeof Array.prototype.indexOf === 'function') {
		return haystack.indexOf(needle) !== -1;
	} else {
		for (i = haystack.length; i >= 0; i --) {
			if (haystack[i] === needle) {
				return true;
			}
		}
		return false;
	}
};

exports.inString = function isInString (needle, haystack) {
	if (typeof haystack !== 'string') {
		haystack = haystack + '';
	}
	return haystack.indexOf(needle) !== -1;
};