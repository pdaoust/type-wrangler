/**
 * @author Paul d'Aoust
 */

var is = require('../index').is;

describe('is', function () {
	var testValues = {
		integer: 1,
		decimal: 1.5,
		zero: 0,
		stringInteger: '1',
		stringDecimal: '2.5',
		string: 'hello',
		array: [0, 1, 2, 1.5, '3', '2.5', 'hello', null, true, false, NaN, {}, [], [1, 2, 3]],
		object: { },
		regexp: /hello/,
		function: function () { },
		nan: NaN,
		boolean: true,
		'null': null
	};

	// is.undefined
	it('should not recognise 1 as undefined', function () {
		var result = is.undefined(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as undefined', function () {
		var result = is.undefined(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as undefined', function () {
		var result = is.undefined(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as undefined', function () {
		var result = is.undefined(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as undefined', function () {
		var result = is.undefined(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as undefined', function () {
		var result = is.undefined(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as undefined', function () {
		var result = is.undefined(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as undefined', function () {
		var result = is.undefined(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as undefined', function () {
		var result = is.undefined(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as undefined', function () {
		var result = is.undefined(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as undefined', function () {
		var result = is.undefined(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as undefined', function () {
		var result = is.undefined(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as undefined', function () {
		var result = is.undefined(testValues.null);
		expect(result).toBe(false);
	});
	it('should recognise an undefinedined value as undefined', function () {
		var result = is.undefined(testValues.undefined);
		expect(result).toBe(true);
	});

	// is.empty
	it('should not recognise 1 as empty', function () {
		var result = is.empty(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as empty', function () {
		var result = is.empty(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as empty', function () {
		var result = is.empty(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as empty', function () {
		var result = is.empty(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as empty', function () {
		var result = is.empty(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as empty', function () {
		var result = is.empty(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as empty', function () {
		var result = is.empty(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as empty', function () {
		var result = is.empty(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as empty', function () {
		var result = is.empty(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as empty', function () {
		var result = is.empty(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as empty', function () {
		var result = is.empty(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as empty', function () {
		var result = is.empty(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should recognise null as empty', function () {
		var result = is.empty(testValues.null);
		expect(result).toBe(true);
	});
	it('should recognise an undefinedined value as empty', function () {
		var result = is.empty(testValues.undefined);
		expect(result).toBe(true);
	});
	it('should not recognise [] as empty', function () {
		var result = is.empty([]);
		expect(result).toBe(false);
	});
	it('should not recognise {} as empty', function () {
		var result = is.empty({});
		expect(result).toBe(false);
	});
	it('should recognise [] as empty array', function () {
		var result = is.empty.array([]);
		expect(result).toBe(true);
	});
	it('should not recognise array as empty array', function () {
		var result = is.empty.array(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as empty array', function () {
		var result = is.empty.array({});
		expect(result).toBe(false);
	});
	it('should recognise {} as empty object', function () {
		var result = is.empty.object({});
		expect(result).toBe(true);
	});
	it('should not recognise testValues as empty object', function () {
		var result = is.empty.object(testValues);
		expect(result).toBe(false);
	});
	it('should not recognise [] as empty object', function () {
		var result = is.empty.object([]);
		expect(result).toBeFalsy();
	});
	it('should recognise args as empty arguments', function () {
		(function () {
			var result = is.empty.array(arguments);
			expect(result).toBe(true);
		})();
	});
	it('should not recognise args as empty arguments', function () {
		(function () {
			var result = is.empty.array(arguments);
			expect(result).toBe(false);
		})(testValues.string, testValues.zero);
	});
	it('should not recognise args as empty object', function () {
		(function () {
			var result = is.empty.object(arguments);
			expect(result).toBeFalsy();
		})(testValues.string, testValues.zero);
	});

	// is.null
	it('should not recognise 1 as null', function () {
		var result = is.null(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as null', function () {
		var result = is.null(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as null', function () {
		var result = is.null(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as null', function () {
		var result = is.null(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as null', function () {
		var result = is.null(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as null', function () {
		var result = is.null(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as null', function () {
		var result = is.null(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as null', function () {
		var result = is.null(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as null', function () {
		var result = is.null(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as null', function () {
		var result = is.null(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as null', function () {
		var result = is.null(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as null', function () {
		var result = is.null(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should recognise null as null', function () {
		var result = is.null(testValues.null);
		expect(result).toBe(true);
	});
	it('should not recognise an undefinedined value as null', function () {
		var result = is.null(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.boolean
	it('should not recognise 1 as boolean', function () {
		var result = is.boolean(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as boolean', function () {
		var result = is.boolean(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as boolean', function () {
		var result = is.boolean(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as boolean', function () {
		var result = is.boolean(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as boolean', function () {
		var result = is.boolean(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as boolean', function () {
		var result = is.boolean(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as boolean', function () {
		var result = is.boolean(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as boolean', function () {
		var result = is.boolean(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as boolean', function () {
		var result = is.boolean(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as boolean', function () {
		var result = is.boolean(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as boolean', function () {
		var result = is.boolean(testValues.nan);
		expect(result).toBe(false);
	});
	it('should recognise true as boolean', function () {
		var result = is.boolean(testValues.boolean);
		expect(result).toBe(true);
	});
	it('should not recognise null as boolean', function () {
		var result = is.boolean(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as boolean', function () {
		var result = is.boolean(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.nan
	it('should not recognise 1 as NaN', function () {
		var result = is.nan(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as NaN', function () {
		var result = is.nan(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as NaN', function () {
		var result = is.nan(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as NaN', function () {
		var result = is.nan(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as NaN', function () {
		var result = is.nan(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as NaN', function () {
		var result = is.nan(testValues.string);
		expect(result).toBe(false);
	});
	it('should recognise an array as NaN', function () {
		var result = is.nan(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as NaN', function () {
		var result = is.nan(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as NaN', function () {
		var result = is.nan(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as NaN', function () {
		var result = is.nan(testValues.function);
		expect(result).toBe(false);
	});
	it('should recognise NaN as NaN', function () {
		var result = is.nan(testValues.nan);
		expect(result).toBe(true);
	});
	it('should not recognise true as NaN', function () {
		var result = is.nan(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as NaN', function () {
		var result = is.nan(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as NaN', function () {
		var result = is.nan(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.number
	it('should recognise 1 as number', function () {
		var result = is.number(testValues.integer);
		expect(result).toBe(true);
	});
	it('should recognise 1.5 as number', function () {
		var result = is.number(testValues.decimal);
		expect(result).toBe(true);
	});
	it('should recognise 0 as number', function () {
		var result = is.number(testValues.zero);
		expect(result).toBe(true);
	});
	it('should not recognise \'1\' as number', function () {
		var result = is.number(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as number', function () {
		var result = is.number(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as number', function () {
		var result = is.number(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as number', function () {
		var result = is.number(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as number', function () {
		var result = is.number(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as number', function () {
		var result = is.number(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as number', function () {
		var result = is.number(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as number', function () {
		var result = is.number(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as number', function () {
		var result = is.number(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as number', function () {
		var result = is.number(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as number', function () {
		var result = is.number(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.integer
	it('should recognise 1 as integer', function () {
		var result = is.integer(testValues.integer);
		expect(result).toBe(true);
	});
	it('should not recognise 1.5 as integer', function () {
		var result = is.integer(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should recognise 0 as integer', function () {
		var result = is.integer(testValues.zero);
		expect(result).toBe(true);
	});
	it('should not recognise \'1\' as integer', function () {
		var result = is.integer(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as integer', function () {
		var result = is.integer(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as integer', function () {
		var result = is.integer(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as integer', function () {
		var result = is.integer(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as integer', function () {
		var result = is.integer(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as integer', function () {
		var result = is.integer(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as integer', function () {
		var result = is.integer(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as integer', function () {
		var result = is.integer(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as integer', function () {
		var result = is.integer(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as integer', function () {
		var result = is.integer(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as integer', function () {
		var result = is.integer(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.float
	it('should not recognise 1 as float', function () {
		var result = is.float(testValues.integer);
		expect(result).toBe(false);
	});
	it('should recognise 1.5 as float', function () {
		var result = is.float(testValues.decimal);
		expect(result).toBe(true);
	});
	it('should not recognise 0 as float', function () {
		var result = is.float(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as float', function () {
		var result = is.float(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as float', function () {
		var result = is.float(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as float', function () {
		var result = is.float(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as float', function () {
		var result = is.float(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as float', function () {
		var result = is.float(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as float', function () {
		var result = is.float(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as float', function () {
		var result = is.float(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as float', function () {
		var result = is.float(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as float', function () {
		var result = is.float(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as float', function () {
		var result = is.float(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as float', function () {
		var result = is.float(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.string
	it('should not recognise 1 as string', function () {
		var result = is.string(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as string', function () {
		var result = is.string(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as string', function () {
		var result = is.string(testValues.zero);
		expect(result).toBe(false);
	});
	it('should recognise \'1\' as string', function () {
		var result = is.string(testValues.stringInteger);
		expect(result).toBe(true);
	});
	it('should recognise \'1.5\' as string', function () {
		var result = is.string(testValues.stringDecimal);
		expect(result).toBe(true);
	});
	it('should recognise \'hello\' as string', function () {
		var result = is.string(testValues.string);
		expect(result).toBe(true);
	});
	it('should not recognise an array as string', function () {
		var result = is.string(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as string', function () {
		var result = is.string(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as string', function () {
		var result = is.string(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as string', function () {
		var result = is.string(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as string', function () {
		var result = is.string(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as string', function () {
		var result = is.string(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as string', function () {
		var result = is.string(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as string', function () {
		var result = is.string(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.object
	it('should not recognise 1 as object', function () {
		var result = is.object(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as object', function () {
		var result = is.object(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as object', function () {
		var result = is.object(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as object', function () {
		var result = is.object(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as object', function () {
		var result = is.object(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as object', function () {
		var result = is.object(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as object', function () {
		var result = is.object(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise an args array as object', function () {
		(function () {
			var result = is.object(arguments);
			expect(result).toBe(false);
		})(testValues.string, testValues.zero);
	});
	it('should recognise {} as object', function () {
		var result = is.object(testValues.object);
		expect(result).toBe(true);
	});
	it('should not recognise /hello/ as object', function () {
		var result = is.object(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as object', function () {
		var result = is.object(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as object', function () {
		var result = is.object(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as object', function () {
		var result = is.object(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as object', function () {
		var result = is.object(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as object', function () {
		var result = is.object(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.array
	it('should not recognise 1 as array', function () {
		var result = is.array(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as array', function () {
		var result = is.array(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as array', function () {
		var result = is.array(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as array', function () {
		var result = is.array(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as array', function () {
		var result = is.array(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as array', function () {
		var result = is.array(testValues.string);
		expect(result).toBe(false);
	});
	it('should recognise an array as array', function () {
		var result = is.array(testValues.array);
		expect(result).toBe(true);
	});
	it('should not recognise an args array as array', function () {
		(function () {
			var result = is.array(arguments);
			expect(result).toBe(false);
		})(testValues.string, testValues.zero);
	});
	it('should not recognise {} as array', function () {
		var result = is.array(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as array', function () {
		var result = is.array(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as array', function () {
		var result = is.array(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as array', function () {
		var result = is.array(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as array', function () {
		var result = is.array(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as array', function () {
		var result = is.array(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as array', function () {
		var result = is.array(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.enumerable
	it('should not recognise 1 as enumerable', function () {
		var result = is.enumerable(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as enumerable', function () {
		var result = is.enumerable(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as enumerable', function () {
		var result = is.enumerable(testValues.zero);
		expect(result).toBe(false);
	});
	it('should recognise \'1\' as enumerable', function () {
		var result = is.enumerable(testValues.stringInteger);
		expect(result).toBe(true);
	});
	it('should recognise \'1.5\' as enumerable', function () {
		var result = is.enumerable(testValues.stringDecimal);
		expect(result).toBe(true);
	});
	it('should recognise \'hello\' as enumerable', function () {
		var result = is.enumerable(testValues.string);
		expect(result).toBe(true);
	});
	it('should recognise an array as enumerable', function () {
		var result = is.enumerable(testValues.array);
		expect(result).toBe(true);
	});
	it('should recognise an args array as enumerable', function () {
		(function () {
			var result = is.enumerable(arguments);
			expect(result).toBe(true);
		})(testValues.string, testValues.zero);
	});
	it('should not recognise {} as enumerable', function () {
		var result = is.enumerable(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as enumerable', function () {
		var result = is.enumerable(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as enumerable', function () {
		var result = is.enumerable(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as enumerable', function () {
		var result = is.enumerable(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as enumerable', function () {
		var result = is.enumerable(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as enumerable', function () {
		var result = is.enumerable(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as enumerable', function () {
		var result = is.enumerable(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.arrayLike
	it('should not recognise 1 as arrayLike', function () {
		var result = is.arrayLike(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as arrayLike', function () {
		var result = is.arrayLike(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as arrayLike', function () {
		var result = is.arrayLike(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as arrayLike', function () {
		var result = is.arrayLike(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as arrayLike', function () {
		var result = is.arrayLike(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as arrayLike', function () {
		var result = is.arrayLike(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as arrayLike', function () {
		var result = is.arrayLike(testValues.array);
		expect(result).toBeFalsy();
	});
	it('should recognise an args array as arrayLike', function () {
		(function () {
			var result = is.arrayLike(arguments);
			expect(result).toBe(true);
		})(testValues.string, testValues.zero);
	});
	it('should not recognise {} as arrayLike', function () {
		var result = is.arrayLike(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as arrayLike', function () {
		var result = is.arrayLike(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as arrayLike', function () {
		var result = is.arrayLike(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as arrayLike', function () {
		var result = is.arrayLike(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as arrayLike', function () {
		var result = is.arrayLike(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as arrayLike', function () {
		var result = is.arrayLike(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as arrayLike', function () {
		var result = is.arrayLike(testValues.undefined);
		expect(result).toBe(false);
	});

		// is.arguments
	it('should not recognise 1 as arguments', function () {
		var result = is.arguments(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as arguments', function () {
		var result = is.arguments(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as arguments', function () {
		var result = is.arguments(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as arguments', function () {
		var result = is.arguments(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as arguments', function () {
		var result = is.arguments(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as arguments', function () {
		var result = is.arguments(testValues.string);
		expect(result).toBe(false);
	});
	it('should recognise an array as array', function () {
		var result = is.array(testValues.array);
		expect(result).toBe(true);
	});
	it('should recognise an args array as arguments', function () {
		(function () {
			var result = is.arguments(arguments);
			expect(result).toBe(true);
		})(testValues.string, testValues.zero);
	});
	it('should not recognise {} as arguments', function () {
		var result = is.arguments(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as arguments', function () {
		var result = is.arguments(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as arguments', function () {
		var result = is.arguments(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as arguments', function () {
		var result = is.arguments(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as arguments', function () {
		var result = is.arguments(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as arguments', function () {
		var result = is.arguments(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as arguments', function () {
		var result = is.arguments(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.function
	it('should not recognise 1 as function', function () {
		var result = is.function(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as function', function () {
		var result = is.function(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as function', function () {
		var result = is.function(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as function', function () {
		var result = is.function(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as function', function () {
		var result = is.function(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as function', function () {
		var result = is.function(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as function', function () {
		var result = is.function(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as function', function () {
		var result = is.function(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as function', function () {
		var result = is.function(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should recognise a function as function', function () {
		var result = is.function(testValues.function);
		expect(result).toBe(true);
	});
	it('should not recognise NaN as function', function () {
		var result = is.function(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as function', function () {
		var result = is.function(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as function', function () {
		var result = is.function(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as function', function () {
		var result = is.function(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.regexp
	it('should not recognise 1 as RegExp', function () {
		var result = is.regexp(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as RegExp', function () {
		var result = is.regexp(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as RegExp', function () {
		var result = is.regexp(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as RegExp', function () {
		var result = is.regexp(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as RegExp', function () {
		var result = is.regexp(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as RegExp', function () {
		var result = is.regexp(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as RegExp', function () {
		var result = is.regexp(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as RegExp', function () {
		var result = is.regexp(testValues.object);
		expect(result).toBe(false);
	});
	it('should recognise /hello/ as RegExp', function () {
		var result = is.regexp(testValues.regexp);
		expect(result).toBe(true);
	});
	it('should not recognise a function as RegExp', function () {
		var result = is.regexp(testValues.function);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as RegExp', function () {
		var result = is.regexp(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as RegExp', function () {
		var result = is.regexp(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as RegExp', function () {
		var result = is.regexp(testValues.null);
		expect(result).toBe(false);
	});
	it('should not recognise an undefinedined value as RegExp', function () {
		var result = is.regexp(testValues.undefined);
		expect(result).toBe(false);
	});

	// is.inArray
	it('should find 1 in array', function () {
		var result = is.inArray(1, testValues.array);
		expect(result).toBe(true);
	});
	it('should find 1.5 in array', function () {
		var result = is.inArray(1.5, testValues.array);
		expect(result).toBe(true);
	});
	it('should not find 2.5 in array', function () {
		var result = is.inArray(2.5, testValues.array);
		expect(result).toBe(false);
	});
	it('should find \'2.5\' in array', function () {
		var result = is.inArray('2.5', testValues.array);
		expect(result).toBe(true);
	});
	it('should find \'hello\' in array', function () {
		var result = is.inArray('hello', testValues.array);
		expect(result).toBe(true);
	});
	it('should find null in array', function () {
		var result = is.inArray(null, testValues.array);
		expect(result).toBe(true);
	});
	it('should find true in array', function () {
		var result = is.inArray(true, testValues.array);
		expect(result).toBe(true);
	});
	it('should find false in array', function () {
		var result = is.inArray(false, testValues.array);
		expect(result).toBe(true);
	});
	it('should not find NaN in array (to be compatible with indexOf())', function () {
		var result = is.inArray(NaN, testValues.array);
		expect(result).toBe(false);
	});
	it('should find null in array', function () {
		var result = is.inArray(null, testValues.array);
		expect(result).toBe(true);
	});
	it('should not find undefinedined in array', function () {
		var result = is.inArray(testValues.undefined, testValues.array);
		expect(result).toBe(false);
	});
	it('should not find an object literal in array', function () {
		var result = is.inArray({}, testValues.array);
		expect(result).toBe(false);
	});
	it('should not find an array literal in array', function () {
		var result = is.inArray([], testValues.array);
		expect(result).toBe(false);
	});
	it('should find the array\'s object literal in array', function () {
		var result = is.inArray(testValues.array[11], testValues.array);
		expect(result).toBe(true);
	});
	it('should find the array\'s empty array literal in array', function () {
		var result = is.inArray(testValues.array[12], testValues.array);
		expect(result).toBe(true);
	});

	// is.inObject
	it('should find 1 in object', function () {
		var result = is.inObject(1, testValues);
		expect(result).toBe(true);
	});
	it('should find 1.5 in object', function () {
		var result = is.inObject(1.5, testValues);
		expect(result).toBe(true);
	});
	it('should not find 2.5 in object', function () {
		var result = is.inObject(2.5, testValues);
		expect(result).toBe(false);
	});
	it('should find \'2.5\' in object', function () {
		var result = is.inObject('2.5', testValues);
		expect(result).toBe(true);
	});
	it('should find \'hello\' in object', function () {
		var result = is.inObject('hello', testValues);
		expect(result).toBe(true);
	});
	it('should find null in object', function () {
		var result = is.inObject(null, testValues);
		expect(result).toBe(true);
	});
	it('should find true in object', function () {
		var result = is.inObject(true, testValues);
		expect(result).toBe(true);
	});
	it('should not find false in object', function () {
		var result = is.inObject(false, testValues);
		expect(result).toBe(false);
	});
	it('should not find NaN in object (to be compatible with indexOf())', function () {
		var result = is.inObject(NaN, testValues);
		expect(result).toBe(false);
	});
	it('should find null in object', function () {
		var result = is.inObject(null, testValues);
		expect(result).toBe(true);
	});
	it('should not find undefinedined in object', function () {
		var result = is.inObject(testValues.undefined, testValues);
		expect(result).toBe(false);
	});
	it('should not find an object literal in object', function () {
		var result = is.inObject({}, testValues);
		expect(result).toBe(false);
	});
	it('should not find an array literal in object', function () {
		var result = is.inObject([], testValues);
		expect(result).toBe(false);
	});
	it('should find the array\'s object literal in object', function () {
		var result = is.inObject(testValues.object, testValues);
		expect(result).toBe(true);
	});
	it('should find the array\'s empty array literal in object', function () {
		var result = is.inObject(testValues.array, testValues);
		expect(result).toBe(true);
	});
});
