// === Find Elements ===
const title = document.getElementById("title");          // by ID
const intro = document.querySelector(".intro");          // by class (first match)
const buttons = document.querySelectorAll("button");     // by tag (NodeList)
const list = document.getElementById("list");            // by ID again

// === Change Elements (event handler) ===
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  title.textContent = "Title Changed!";      // change text
  intro.style.color = "blue";                // change style
});

// === Add Elements ===
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");   // create element
  newItem.textContent = "New Item";               // set text
  list.appendChild(newItem);                      // add to list
});

// === Delete Elements ===
const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", () => {
  if (list.lastElementChild) {        // check there is at least one item
    list.lastElementChild.remove();   // remove last item
  }
});

// === Bonus: Background color rotation ===
const colors = ["lightblue", "lightgreen", "lightyellow", "lavender"];
let index = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // cycle through colors
}, 2000);
