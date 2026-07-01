As every element in HTML in the DOM is a JS object I can inspect it properties and methods using `consolge.dir(elem)`

We can use `.tagName` to verify the tag of the element




```js
/*
    innerHTML changes the internal structure of the html element
*/

elem.innerHTML = "Some text" //changes the markup of the html 

/*
    Careful of
*/

elem.innerHTML += "some other text" //this deletes the previous tag and all it's content, replaces it with a new one with the new content


/*
    outerHTML changes the markup and the tag of the selected html element
*/

elem.outerHTML = "<p> New tag </p>" // this does not update on memory however, it still keeps the old value

/*
    textContent only changes the pure text inside the element
*/

elem.textContent = "Hi"

```


Only use `innerHTML` for injecting new tags to existing elements