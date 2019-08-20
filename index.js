/* Type Wrangler -- convenience object for testing/casting certain types and
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
		hasOwnProperty = {}.hasOwnProperty;

	/* --- is: type checking --- */

	var is = {
		"undefined": function (value) {
			return typeof value === 'undefined';
		},

		defined: function (value) {
			return typeof value !== 'undefined';
		},

		empty: function (value) {
			return value == null;
		},

		emptyArray: function (value) {
			return is.enumerable(value) && !is.string(value) && value.length === 0;
		},

		/* is.empty.object() checks to see if value has any properties of its own.
		 * If it's not an object, returns undefined. */
		emptyObject: function (value) {
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
		},

		"null": function (value) {
			return value === null;
		},

		boolean: function (value) {
			return typeof value === 'boolean';
		},

		nan: function (value) {
			return typeof value === 'number' && isNaN(value);
		},

		infinite: function (value) {
			return typeof value === 'number' && !isFinite(value) && !isNaN(value);
		},

		finite: function (value) {
			return isFinite(value);
		},
	
		number: function (value) {
			return typeof value === 'number' && isFinite(value);
		},
	
		integer: function (value) {
			return value === (value | 0);
		},
	
		float: function (value) {
			return is.number(value) && value !== (value | 0);
		},
	
		string: function (value) {
			return typeof value === 'string';
		},
	
		object: function (value) {
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
		},
	
		array: function (value) {
			return toString.call(value) === '[object Array]';
		},
	
		/* is.enumerable()
		 * duck-types enumerable objects (arrays, array-like objects, and strings)
		 * to see if value has a numeric length property and is not a function
		 * (functions can have a length property, but it's used for the number of
		 * arguments, and therefore does not indicate enumerability) */
		enumerable: function (value) {
			return value != null // guard against trying to cast null to object
				&& hasOwnProperty.call(value, 'length')
				&& !is.function(value)
				&& is.finite(value.length);
		},
	
		arrayLike: function (value) {
			return !is.string(value) && !is.array(value) && is.enumerable(value);
		},
	
		"arguments": function (value) {
			return toString.call(value) === '[object Arguments]';
		},
	
		"function": function (value) {
			return toString.call(value) === '[object Function]';
		},
	
		regexp: function (value) {
			return toString.call(value) === '[object RegExp]';
		},
	
		date: function (value) {
			return toString.call(value) === '[object Date]';
		},
	
		"in": function (needle, haystack) {
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
		},
	
		inArray: function (needle, haystack) {
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
		},
	
		inObject: function (needle, haystack) {
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
		},
	
		ownProperty:function (property, object) {
			if (object === undefined) {
				if (is.object(this)) {
					object = this;
				} else {
					return false;
				}
			}
			return hasOwnProperty.call(object, property);
		},
	
		inString: function (needle, haystack) {
			if (typeof haystack !== 'string') {
				haystack = toString.call(haystack);
			}
			return haystack.indexOf(needle) !== -1;
		},
	
		jQuery: function (value) {
			return !is.undefined(jQuery) && value instanceof jQuery;
		}
	};
	
	// aliases
	is.empty.array = is.emptyArray;
	is.emptyArguments = is.emptyArray;
	is.empty["arguments"] = is.emptyArguments;
	is.empty.object = is.emptyObject;
	is.in.array = is.inArray;
	is.in.object = is.inObject;
	is.in.string = is.inString;
	

	/* --- to: typecasting --- */

	var to = {
		boolean: function (value) {
			return !!value;
		},
	
		number: function (value) {
			return parseFloat(value);
		},
	
		integer: function (value) {
			return parseInt(value, 10);
		},
	
		string: function (value) {
			return toString.call(value);
		},
	
		array: function (value) {
			var prop, newValue = [];
			if (is.array(value)) {
				return value;
			}
			if (is.enumerable(value)) {
				return toArray.call(value);
			}
			return [value];
		},
	
		regexp: function (value) {
			if (is.string(value)) {
				return new RegExp(value);
			}
		},
	
		date: function (value) {
			return new Date(value);
		}
	};

	exports.is = is;
	exports.to = to;
})(exports !== undefined ? exports : this);
