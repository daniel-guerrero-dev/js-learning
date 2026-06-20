# Conditional Operator

it allows to assign values to variables if they met certain conditions

```js
condition ? val1 : val2;
```

```js
const status = age >= 18 ? "Adult" : "Minor"; // assings the status of adult if the age is over 18
```

# Comma Operator

The comma opperator evaluates every value in it's range from left to right and returns the last operand.

```js
let x = 2;
let sum = (x++, x);

console.log(sum); // will log 3 for the value of sum.
```

# Unary Operators
A unary operation is an operation with only one operand.

`delete`
The delete operator deletes a property from an object.

`void`
The void operator evaluates an expression and discards its return value.

`typeof`
The typeof operator determines the type of a given object.

`+`
The unary plus operator converts its operand to Number type.

`-`
The unary negation operator converts its operand to Number type and then negates it.

`~`
Bitwise NOT operator.

`!`
Logical NOT operator.

`await`
Pause and resume an async function and wait for the promise's fulfillment/rejection.

# Asignment Operators

The basic asignment operator is `=` and it can be combined with other operators to simplify notation

```js
let x = f(); //assings the value of f() into x
let x += f(); // same as x = x + f()
let x -= f(); // same as x = x - f()
let x *= f(); // same as x = x * f()
let x /= f(); // same as x = x / f()
let x %= f(); // same as x = x % f()
let x **= f(); // same as x = x ** f()
let x <<= f(); // same as x = x << f()
let x >>= f(); // same as x = x >> f()
let x >>>= f(); // same as x = x >>> f()
let x &= f(); // same as x = x & f()
let x ^= f(); // same as x = x ^ f()
let x |= f(); // same as x = x | f()
let x &&= f(); // same as x = x && (x = f())
let x ||= f(); // same as x = x || (x = f())
let x ??= f(); // same as x ?? (x = f())
```

# Comparison Operators

Always returns a boolean operator

`==` returns true if both operands are equal
`!=` returns true if both operands are not equal
`===` strict equal (always use this)
`!==` strict not equal (idk if this is prefered yet)
`>` returns true if the left operand is bigger than the right operand
`>=` returns true if the left operand is beigger than or equal to the right operand
`<` returns true if the right operand is bigger than the left operand
`<=` returns true if the right operand is bigger than or equal to the left operand

# Arithmetic Operators

They return a number when applied into operators

# Logical operators

Returns a boolean when applied into operators

`||` Logical OR
`&&` Logical AND
`??` Nullish Coalescing Operator

# String Operators

When using the `+` operator with a string it concatonates both operands together. ex:

```js
let message1 = "Hello ";
let message2 = "World";

console.log(message1 + message2); // Outputs "Hello World" as a single string
````
