# GetElementByID

This is nice to use when you need to find an element of the HTML file that has an `id` property. for example

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // get the element
  let elem = document.getElementById('elem');

  // make its background red
  elem.style.background = 'red';
</script>
```

ids can be accessed directly from the DOM as global variables but it's considered malpractice as it obfuscates code.
And makes it impossible to read on bigger projects.

# QuerySelectorAll

Possibly the best searching method, as it's very versatile since it allows the use of css querys to target elements in the DOM. ex.

```html
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>
```

# QuerySelector

same as the previous one, but this returns a single element from the search and the first one, similar to saying `QuerySelectorAll("css")[0]` 

# Matches

This method doesnt search for anything. It merely checks if the selected `elem` matches the given CSS-selector. It returns `true` or `false`

# Closest

This method searches the closest ancestor (parent of the children node element we're selecting), ex.

```html
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>
```
