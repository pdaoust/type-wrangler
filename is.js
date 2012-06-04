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

(function (exports) {
	var toString = {}.toString,
		hasOwnProperty = {}.hasOwnProperty;

	exports.undefined = function isUndefined (value) {
		return typeof value === 'undefined';
	};

	exports.empty = function isEmpty (value) {
		return value == null;
	};

	exports.empty.array = exports.empty.arguments = function isEmptyArray (value) {
		return value.length === 0;
	}

	exports.empty.object = function isEmptyObject (value) {
		var i, j = 0;
		if (!exports.object(value)) {
			return false;
		}
		for (i in value) {
			if (value.hasOwnProperty(i)) {
				j ++;
			}
		}
		return !j;
	};

	exports.null = function isNull (value) {
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

	exports.float = function isFloat (value) {
		return exports.number(value) && value !== (value | 0);
	};

	exports.string = function isString (value) {
		return typeof value === 'string';
	};

	exports.object = function isObject (value) {
		if (typeof value === 'object') {
			if (value !== null) {
				if (!(value instanceof RegExp)) {
					if (!exports.arrayLike(value)) {
						return true;
					}
				}
			}
		}
		return false;
	};

	exports.array = function isArray (value) {
		return toString.call(value) === '[object Array]';
	};

	/* is.arrayLike()
	 * checks to see if value has a length property and is neither a function
	 * nor a string */
	exports.arrayLike = function isArrayLike (value) {
		return value != null // guard against trying to cast null to object
			&& typeof value !== 'string'
			&& hasOwnProperty.call(value, 'length')
			&& !exports.function(value)
			&& isFinite(value.length);
	};

	exports.arguments = function isArguments (value) {
		return toString.call(value) === '[object Arguments]';
	}

	exports.function = function isFunction (value) {
		return value instanceof Function;
	};

	exports.regexp = function isRegexp (value) {
		return value instanceof RegExp;
	};

	exports.inArray = function isInArray (needle, haystack) {
		var i;
		if (haystack === undefined) {
			// can be called; will work on this if haystack is undefined
			if (exports.arrayLike(this)) {
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

	exports.inObject = function isInObject (needle, haystack) {
		var i;
		if (haystack === undefined) {
			// can be called; will work on this if haystack is undefined
			if (exports.object(this)) {
				haystack = this;
			} else {
				return false;
			}
		}
		for (i in haystack) {
			if (haystack[i] === needle) {
				return true;
			}
		}
		return false;
	};

	exports.ownProperty = function isOwnProperty (property, object) {
		return hasOwnProperty.call(object, property);
	}

	exports.inString = function isInString (needle, haystack) {
		if (typeof haystack !== 'string') {
			haystack = toString.call(haystack);
		}
		return haystack.indexOf(needle) !== -1;
	};
})(this);
