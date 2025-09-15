# Lesson Task – DOM Basics

## Goal
Build a small interactive page where you **find**, **change**, **create**, and **delete** HTML elements, and use an **event handler** to make it dynamic.

## Instructions

Create an `index.html` file with the following starter content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Lesson Task</title>
</head>
<body>
  <h1 id="title">My DOM Page</h1>
  <p class="intro">This is the introduction paragraph.</p>
  
  <button id="changeBtn">Change Title</button>
  <button id="addBtn">Add New Item</button>
  <button id="removeBtn">Remove Last Item</button>

  <ul id="list">
    <li>First item</li>
    <li>Second item</li>
  </ul>

  <script src="script.js"></script>
</body>
</html>
```

## Tasks

### Find Elements
* In `script.js`, use at least three different methods to find elements:
    * `getElementById`
    * `querySelector`
    * `getElementsByClassName` or `querySelectorAll`

### Change Elements
* When clicking Change Title, change the `<h1>` text to something new (e.g., `"Title Changed!"`).
* Also change the paragraph color to **blue**.

### Add Elements
* When clicking **Add New Item**, create a new `<li>` element with the text **"New Item"**.
* Append it to the `<ul>` list.

### Delete Elements
* When clicking **Remove Last Item**, remove the last `<li>` from the list.
* Tip: use `.lastElementChild.remove()`.

### Bonus Challenge
* Use setInterval to automatically change the background color of the `<body>` every 2 seconds.
* Use an array of colors like `["lightblue", "lightgreen", "lightyellow"]`.
