/* Wrangler -- convenience object for testing/casting certain types and
 * smoothing out JavaScript weirdness like:
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
		toArray = [].slice,
		hasOwnProperty = {}.hasOwnProperty,
		is = {}, to = {};

	/* --- is: type checking --- */

	is.undefined = function isUndefined (value) {
		return typeof value === 'undefined';
	};

	is.defined = function isUndefined (value) {
		return typeof value !== 'undefined';
	};

	is.empty = function isEmpty (value) {
		return value == null;
	};

	is.empty.array = is.emptyArray = is.empty.arguments = is.emptyArguments = function isEmptyArray (value) {
		return is.enumerable(value) && !is.string(value) && value.length === 0;
	}

	/* is.empty.object() checks to see if value has any properties of its own.
	 * If it's not an object, returns undefined. */
	is.empty.object = is.emptyObject = function isEmptyObject (value) {
		var i, j = 0;
		if (!is.object(value)) {
			return;
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
		return typeof value === 'number' && isNaN(value);
	};

	is.infinite = function isInfinite (value) {
		return typeof value === 'number' && !isFinite(value) && !isNaN(value);
	};

	is.number = function isNumber (value) {
		return typeof value === 'number' && isFinite(value);
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
					if (!is.enumerable(value)) {
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

	/* is.enumerable()
	 * duck-types enumerable objects (arrays, array-like objects, and strings)
	 * to see if value has a numeric length property and is not a function
	 * (functions can have a length property, but it's used for the number of
	 * arguments, and therefore does not indicate enumerability) */
	is.enumerable = function isEnumerable (value) {
		return value != null // guard against trying to cast null to object
			&& hasOwnProperty.call(value, 'length')
			&& !is.function(value)
			&& isFinite(value.length);
	};

	is.arrayLike = function isArrayLike (value) {
		return !is.string(value) && !is.array(value) && is.enumerable(value);
	};

	is.arguments = function isArguments (value) {
		return toString.call(value) === '[object Arguments]';
	};

	is.function = function isFunction (value) {
		return toString.call(value) === '[object Function]';
	};

	is.regexp = function isRegexp (value) {
		return toString.call(value) === '[object RegExp]';
	};

	is.date = function isDate (value) {
		return toString.call(value) === '[object Date]';
	}

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

	is.jQuery = function isJQuery (value) {
		return !is.undefined(jQuery) && value instanceof jQuery;
	};

	/* --- to: typecasting --- */

	to.boolean = function toBoolean (value) {
		return !!value;
	};

	to.number = to.float = function toNumber (value) {
		return parseFloat(value);
	};

	to.integer = function toInteger (value) {
		return parseInt(value, 10);
	};

	to.string = function tostring (value) {
		return toString.call(value);
	};

	to.array = function toarray (value) {
		var prop, newValue = [];
		if (is.array(value)) {
			return value;
		}
		if (is.enumerable(value)) {
			return toArray.call(value);
		}
		return [value];
	};

	to.regexp = function toRegexp (value) {
		if (is.string(value)) {
			return new RegExp(value);
		}
	};

	to.date = function toDate (value) {
		return new Date(value);
	};

	exports.is = is;
	exports.to = to;
})(exports !== undefined ? exports : this);
