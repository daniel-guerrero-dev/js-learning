variables are mutable, you can define one, store text into it and then redefine it with numbers stored into them. ex:

```js 
let message = "Hello";
message = 1234;
```


# numbers

Variables can store safely numbers of $2^{52}-1$ in magnitude, any number bigger than that shall be defined with an "n" at the end of it, to mark it as `BigInt`

# Strings

It's variables that can store text, unlike other languages there's no `char` data type, strings can have 0 characters, 1 character or n characters.
They get defined by appending ",' or ` to the end and start of the text, with the later one having extended embedding functionality

```js
let hi = "hello";
let hi2 = 'hewwo';
let hiButSpecial = `This is a ${hi}`;
```

The later one having an output of "This is a hello" as we append the `hi` variable to the end of it

# Boolean

they are true or false, any logical operation or binary operation will output either True or False

# null

It states an empty variable or of unknown value, does not reference a null pointer or undefined behaviour like it does in other languages

# Undefined

When a variable is declared but no value assigned to it, this takes the variable of `undefined`

```js

let age;
alert(age) // will output `undefined`
```

## "Advanced"

# Objects and Symbols

## Objects

Objects are a special type of variable, where primitive data types can only store 1 thing, objects can store complex combinations of data and entities.

## Symbols

Symbols are unique identifiers to declare an object.

## Typeof

It's an operation that returns the data type of the selected variable

```js

let message = "hello";

typeof message // this returns string

```
