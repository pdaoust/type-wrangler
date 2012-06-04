/**
 * @author Paul d'Aoust
 */

var is = require('../is');

describe('is', function () {
	var testValues = {
		integer: 1,
		decimal: 1.5,
		zero: 0,
		stringInteger: '1',
		stringDecimal: '1.5',
		string: 'hello',
		array: [0, 1, 2, 1.5, '3', '2.5', 'hello', null, true, false, NaN, {}, [], [1, 2, 3]],
		object: { },
		regexp: /hello/,
		func: function () { },
		nan: NaN,
		boolean: true,
		nul: null
	};

	// is.undef
	it('should not recognise 1 as undef', function () {
		var result = is.undef(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as undef', function () {
		var result = is.undef(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as undef', function () {
		var result = is.undef(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as undef', function () {
		var result = is.undef(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as undef', function () {
		var result = is.undef(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as undef', function () {
		var result = is.undef(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as undef', function () {
		var result = is.undef(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as undef', function () {
		var result = is.undef(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as undef', function () {
		var result = is.undef(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as undef', function () {
		var result = is.undef(testValues.func);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as undef', function () {
		var result = is.undef(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as undef', function () {
		var result = is.undef(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as undef', function () {
		var result = is.undef(testValues.nul);
		expect(result).toBe(false);
	});
	it('should recognise an undefined value as undef', function () {
		var result = is.undef(testValues.undef);
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
		var result = is.empty(testValues.func);
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
		var result = is.empty(testValues.nul);
		expect(result).toBe(true);
	});
	it('should recognise an undefined value as empty', function () {
		var result = is.empty(testValues.undef);
		expect(result).toBe(true);
	});

	// is.nul
	it('should not recognise 1 as null', function () {
		var result = is.nul(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as null', function () {
		var result = is.nul(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as null', function () {
		var result = is.nul(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as null', function () {
		var result = is.nul(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as null', function () {
		var result = is.nul(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as null', function () {
		var result = is.nul(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as null', function () {
		var result = is.nul(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as null', function () {
		var result = is.nul(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as null', function () {
		var result = is.nul(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as null', function () {
		var result = is.nul(testValues.func);
		expect(result).toBe(false);
	});
	it('should not recognise NaN as null', function () {
		var result = is.nul(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as null', function () {
		var result = is.nul(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should recognise null as null', function () {
		var result = is.nul(testValues.nul);
		expect(result).toBe(true);
	});
	it('should not recognise an undefined value as null', function () {
		var result = is.nul(testValues.undef);
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
		var result = is.boolean(testValues.func);
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
		var result = is.boolean(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as boolean', function () {
		var result = is.boolean(testValues.undef);
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
		var result = is.nan(testValues.func);
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
		var result = is.nan(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as NaN', function () {
		var result = is.nan(testValues.undef);
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
		var result = is.number(testValues.func);
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
		var result = is.number(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as number', function () {
		var result = is.number(testValues.undef);
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
		var result = is.integer(testValues.func);
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
		var result = is.integer(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as integer', function () {
		var result = is.integer(testValues.undef);
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
		var result = is.string(testValues.func);
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
		var result = is.string(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as string', function () {
		var result = is.string(testValues.undef);
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
	it('should recognise {} as object', function () {
		var result = is.object(testValues.object);
		expect(result).toBe(true);
	});
	it('should not recognise /hello/ as object', function () {
		var result = is.object(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as object', function () {
		var result = is.object(testValues.func);
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
		var result = is.object(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as object', function () {
		var result = is.object(testValues.undef);
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
	it('should not recognise {} as array', function () {
		var result = is.array(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as array', function () {
		var result = is.array(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should not recognise a function as array', function () {
		var result = is.array(testValues.func);
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
		var result = is.array(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as array', function () {
		var result = is.array(testValues.undef);
		expect(result).toBe(false);
	});

	// is.func
	it('should not recognise 1 as function', function () {
		var result = is.func(testValues.integer);
		expect(result).toBe(false);
	});
	it('should not recognise 1.5 as function', function () {
		var result = is.func(testValues.decimal);
		expect(result).toBe(false);
	});
	it('should not recognise 0 as function', function () {
		var result = is.func(testValues.zero);
		expect(result).toBe(false);
	});
	it('should not recognise \'1\' as function', function () {
		var result = is.func(testValues.stringInteger);
		expect(result).toBe(false);
	});
	it('should not recognise \'1.5\' as function', function () {
		var result = is.func(testValues.stringDecimal);
		expect(result).toBe(false);
	});
	it('should not recognise \'hello\' as function', function () {
		var result = is.func(testValues.string);
		expect(result).toBe(false);
	});
	it('should not recognise an array as function', function () {
		var result = is.func(testValues.array);
		expect(result).toBe(false);
	});
	it('should not recognise {} as function', function () {
		var result = is.func(testValues.object);
		expect(result).toBe(false);
	});
	it('should not recognise /hello/ as function', function () {
		var result = is.func(testValues.regexp);
		expect(result).toBe(false);
	});
	it('should recognise a function as function', function () {
		var result = is.func(testValues.func);
		expect(result).toBe(true);
	});
	it('should not recognise NaN as function', function () {
		var result = is.func(testValues.nan);
		expect(result).toBe(false);
	});
	it('should not recognise true as function', function () {
		var result = is.func(testValues.boolean);
		expect(result).toBe(false);
	});
	it('should not recognise null as function', function () {
		var result = is.func(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as function', function () {
		var result = is.func(testValues.undef);
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
		var result = is.regexp(testValues.func);
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
		var result = is.regexp(testValues.nul);
		expect(result).toBe(false);
	});
	it('should not recognise an undefined value as RegExp', function () {
		var result = is.regexp(testValues.undef);
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
	it('should not find undefined in array', function () {
		var result = is.inArray(testValues.undef, testValues.array);
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
});
