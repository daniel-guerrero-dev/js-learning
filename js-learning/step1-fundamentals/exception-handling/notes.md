# Error Handling

We use the try... catch operators to signify that somethign went wrong without fully dying

```js

try {
  // some code
  // If code doesn't execute then there was an error
  // If error we don't reach the end of try
} catch (err) {
  // error handling code
}

````
where `err` is an error object that contains the information related to the error

# Throw Operator

The throw operator lets us create our own errors when the code is syntactically correct but the desired output does not behave in the way we expect

There are many types of errors we can define such as:

```js
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

```js
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
````


# Finally

When doing try...catch theres an extra keyword that goes along in the case that you want the code to keep running regardless of the outcome so the syntax becomes

```js
try{
  alert("execute");
} catch (err) {
  alert ("There was an error!");
}
finally{
  alert("this goes through no matter what");
}

```
