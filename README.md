# Wrangler
`Wrangler` is a very small CommonJS module that smoothes over some of the gotchas in JavaScript type checking and casting. It behaves the way you (or rather, I) would expect type checking and casting to work -- e.g., `is.object()` only works on objects that are neither arrays nor regular expressions. It also makes `indexOf()` easier to use, and provides search functions. Works in Node; should work in browser as well, exporting the objects `is` and `to` into the global namespace.

None of these techniques are earth-shattering; most people will use these in their daily work. I just didn't want to have to remember all of them while I was banging out code.

Test coverage is as thorough as my imagination allows. I used Jasmine for unit testing.

## API

### Type checking

All checking is strict, unless otherwise noted. Each function returns either true or false.

* `is.undefined( value )`
* `is.null( value )`
* `is.empty( value )` - checks for null or undefined
* `is.empty.array( value )` or `is.emptyArray( value )` - must be an array-like object and have no items
* `is.empty.arguments( value )` or `is.emptyArguments( value )` - identical to above
* `is.empty.object( value )` or `is.emptyObject( value )` - must be an object and have no properties of its own; objects with properties in their prototype chains will also fail
* `is.null( value )`
* `is.boolean( value )`
* `is.nan( value )` - really not necessary, since it merely calls `isNan()`. But I just included it to be thorough.
* `is.infinite( value )` - opposite of `isFinite()`. I didn't include an `isFinite()` function because `is.number()` performs this check.
* `is.number( value )` - includes all the sensible numbers (e.g., not `NaN` or `Infinity`).
* `is.integer( value )` - we all know JavaScript doesn't have integers or floats, so this fills half that gap.
* `is.float( value )` - and this fills the other half of the gap.
* `is.string( value )`
* `is.object( value )` - anything considered to be an object, except `null`, regular expressions, arrays, or array-like objects. Functions are considered objects, of course.
* `is.array( value )` - any good old honest 'true' array.
* `is.enumerable( value )` - arrays, array-like objects, and strings. Anything that can be iterated upon. (Yes, that does include strings!)
* `is.arrayLike( value )` - array-like objects (but not arrays).
* `is.arguments( value )` - the `arguments` array-like object.
* `is.function( value )`
* `is.regexp( value )`
* `is.in( needle [, haystack] )` - takes a needle and performs a strict search on the haystack. If the haystack is not supplied, `this` is assumed as the haystack. The haystack can be an object, array-like object, or string. In case of objects, only the self-owned, direct descendants are searched.
* `is.in.array( needle [, haystack] )` or `is.inArray( needle [, haystack] )` - works on array-like objects only.
* `is.in.object( needle [, haystack] )` or `is.inObject( needle [, haystack] )` - works only on haystacks that pass the `is.object()` test.
* `is.in.string( needle [, haystack] )` or `is.inString( needle [, haystack] )` - string search; converts non-strings to strings.
* `is.ownProperty( property [, object] )` - calls `Object.prototype.hasOwnProperty()` on the object. If the object is not supplied, `this` is assumed.

### Type casting

* `to.boolean( value )`
* `to.number( value )` or `to.float( value )` - calls `parseFloat()` on the value; therefore, it may return `NaN`.
* `to.integer( value )` - returns the integral part of the value. Acts as floor for positive numbers and ceiling for negative integers.
* `to.string( value )`
* `to.array( value )` - casts array-like objects to arrays and everything else to an array containing a single element, which happens to be the passed value.
* `to.regexp( value )` - if the value is a string, returns a regular expression using the `new RegExp()` constructor. Returns `undefined` if the value is not a string.
* `to.date( value )` - returns a new date object using the `new Date()` constructor.

More typecasting to follow, as I think of cases that need it!

## The other `is`

Note: This is not the same as the `is` by Enrico Marino, which is another interesting JavaScript type checking library. He uses some neat techniques, and also adds functions for comparison (e.g., `is.gt()`, `is.odd()`, `is.divisibleBy()`) which I had no interest in. You can find his library at https://github.com/onirame/is
