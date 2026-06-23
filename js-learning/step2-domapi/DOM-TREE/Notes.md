When dealing with HTLM DOM every tag is an object that's accesible with javascript, `document.body` is equivalent to modifying the `<body>` tag itself

Everything in an html document becomes an element in the DOM and as such modifiable. Elements have children and nodes. text in html becomes text nodes, titles become text nodes, meta tags become document nodes, etc. Everything in the HTML document has a place in the DOM, even comments.
