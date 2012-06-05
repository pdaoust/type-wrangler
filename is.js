/* is.js -- convenience object for testing certain types and smoothing out
 * JavaScript weirdness like:
 *
 * 		undefined !== undefined
 * 		typeof /regexp/ == 'object'
 * 		typeof Nan == 'number'
 *
 * et cetera. Nothing earth-shattering, and it's certainly a bunch of rules we
 * should all know; I just wanted to create something simple so I wouldn't have
 * to keep remembering the rules. */

(function (exports) {
	var toString = {}.toString,
		hasOwnProperty = {}.hasOwnProperty,
		is = exports;

	is.undefined = function isUndefined (value) {
		return typeof value === 'undefined';
	};

	is.empty = function isEmpty (value) {
		return value == null;
	};

	is.empty.array = is.emptyArray = is.empty.arguments = is.emptyArguments = function isEmptyArray (value) {
		return is.arrayLike(value) && value.length === 0;
	}

	is.empty.object = function isEmptyObject (value) {
		var i, j = 0;
		if (!is.object(value)) {
			return false;
		}
		for (i in value) {
			if (value.hasOwnProperty(i)) {
				j ++;
			}
		}
		return !j;
	};

	is.null = function isNull (value) {
		return value === null;
	};

	is.boolean = function isBoolean (value) {
		return typeof value === 'boolean';
	};

	is.nan = function isNan (value) {
		return isNaN(value) && typeof value === 'number';
	};

	is.infinite = function isInfinite (value) {
		return !isFinite(value);
	}

	is.number = function isNumber (value) {
		return typeof value === 'number' && !isNaN(value) && isFinite(value);
	};

	is.integer = function isInteger (value) {
		return value === (value | 0);
	};

	is.float = function isFloat (value) {
		return is.number(value) && value !== (value | 0);
	};

	is.string = function isString (value) {
		return typeof value === 'string';
	};

	is.object = function isObject (value) {
		if (typeof value === 'object') {
			if (value !== null) {
				if (!(value instanceof RegExp)) {
					if (!is.arrayLike(value)) {
						return true;
					}
				}
			}
		}
		return false;
	};

	is.array = function isArray (value) {
		return toString.call(value) === '[object Array]';
	};

	/* is.arrayLike()
	 * checks to see if value has a length property and is neither a function
	 * nor a string */
	is.arrayLike = function isArrayLike (value) {
		return value != null // guard against trying to cast null to object
			&& typeof value !== 'string'
			&& hasOwnProperty.call(value, 'length')
			&& !is.function(value)
			&& isFinite(value.length);
	};

	is.arguments = function isArguments (value) {
		return toString.call(value) === '[object Arguments]';
	}

	is.function = function isFunction (value) {
		return value instanceof Function;
	};

	is.regexp = function isRegexp (value) {
		return value instanceof RegExp;
	};

	is.in = function isIn (needle, haystack) {
		var searchFunction;
		if (haystack === undefined) {
			haystack = this;
		}
		if (is.string(haystack)) {
			searchFunction = is.inString;
		} else if (is.arrayLike(haystack)) {
			searchFunction = is.inArray;
		} else {
			searchFunction = is.inObject;
		}
		return searchFunction(needle, haystack);
	};

	is.inArray = is.in.array = function isInArray (needle, haystack) {
		var i;
		if (haystack === undefined) {
			// can be called; will work on this if haystack is undefined
			if (is.arrayLike(this)) {
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

	is.inObject = is.in.object = function isInObject (needle, haystack) {
		var i;
		if (haystack === undefined) {
			// can be called; will work on this if haystack is undefined
			if (is.object(this)) {
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

	is.ownProperty = function isOwnProperty (property, object) {
		if (object === undefined) {
			if (is.object(this)) {
				object = this;
			} else {
				return false;
			}
		}
		return hasOwnProperty.call(object, property);
	}

	is.inString = is.in.string = function isInString (needle, haystack) {
		if (typeof haystack !== 'string') {
			haystack = toString.call(haystack);
		}
		return haystack.indexOf(needle) !== -1;
	};
})(exports !== undefined ? exports : this['is'] = {});
