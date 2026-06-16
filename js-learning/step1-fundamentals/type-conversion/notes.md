# Type conversions

## String conversion
```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```
the type of value is a boolean, when called the `String()` function converts it's value to a string

## Number conversion

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

str here is a string but when applied the `Number()` function it converts the string into numbers

## Boolean conversion

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```
If a string contains characters targeting it with the `boolean` operation will return true
