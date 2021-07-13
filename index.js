/* Theme */

const setTheme = (theme) => (document.documentElement.className = theme);

if (!localStorage.getItem("theme")) {
   setTheme("light");
} else {
   setTheme(localStorage.getItem("theme"));
}
const theme_container = document.getElementById("theme");
const _themes = [
   "dark",
   "light",
   "blue",
   "red",
   "purple",
   "gray",
   "yellow",
   "green",
];

const theme_title = document.createElement("h1");
theme_title.classList.add("theme_title");
theme_title.textContent = "Theme   ";
theme_container.appendChild(theme_title);

_themes.forEach(function (theme, index) {
   var div = document.createElement("div");
   div.classList.add("theme");

   if (theme == "light") {
      div.style.backgroundColor = "white";
   } else if (theme == "dark") {
      div.style.backgroundColor = "black";
      div.style.border = "1px solid white";
   } else {
      div.style.backgroundColor = theme;
   }

   div.onclick = function () {
      console.log(theme);
      setTheme(theme);
      localStorage.setItem("theme", theme);
   };
   theme_container.appendChild(div);
});

/* Toggle */
const left = document.getElementById("left");
const right = document.getElementById("right");

/* left.style.visibility = localStorage.getItem("leftOpen") === true ? "visible" : "hidden";
 */
function toggleLeft() {
   if (left.style.visibility == "visible") {
      left.style.visibility = "hidden";
      right.classList.toggle("leftClosed");
      right.classList.remove("leftOpen");

      console.log(right.classList);
   } else {
      left.style.visibility = "visible";
      right.classList.remove("leftClosed");
      right.classList.toggle("leftOpen");
   }
}
/* Input Focus */
function inputFocus(event) {
   if (event.keyCode == 13) {
      addTodo();
      document.getElementById("add").focus();
   }
}
/* Get todos */
const todos = localStorage.getItem("todos")
   ? localStorage.getItem("todos").split(",")
   : ["Eat pizza today", "Code new app", "Reinvent the wheel"];
const counter_span = document.createElement("span");
counter_span.classList.add("counter_span");
counter_span.textContent = todos.length;
document.getElementById("counter").innerHTML = " Todo counter: ";
counter.appendChild(counter_span);

var todos_container = document.getElementById("todos_container");

/* function reload() {
   var container = document.getElementById("todos_container");
   var content = container.innerHTML;
   container.innerHTML = content;
} */
todos.forEach(function (todo, index) {
   var div = document.createElement("div");
   div.classList.add("todo_container");
   div.onclick = function () {
      dones.unshift(todo);
      localStorage.setItem("dones", dones);

      todos.splice(index, 1);
      localStorage.setItem("todos", todos);
      location.reload();
   };
   var h1 = document.createElement("h1");
   h1.textContent = todo;
   h1.classList.add("todo_title");

   div.appendChild(h1);
   todos_container.appendChild(div);
});

//Dones
const dones = localStorage.getItem("dones")
   ? localStorage.getItem("dones").split(",")
   : ["Watch Ricky and Morty", "Learn Regex"];
var dones_container = document.getElementById("dones_container");

dones.forEach(function (done, index) {
   var div = document.createElement("div");
   div.classList.add("done_container");
   div.onclick = function () {
      todos.unshift(done);
      localStorage.setItem("todos", todos);
      dones.splice(index, 1);
      localStorage.setItem("dones", dones);
      location.reload();
   };
   var h1 = document.createElement("h1");
   h1.textContent = done;
   h1.classList.add("done_title");

   div.appendChild(h1);
   dones_container.appendChild(div);
});

function addTodo() {
   if (document.getElementById("add").value) {
      todos.unshift(document.getElementById("add").value);
      localStorage.setItem("todos", todos);
      location.reload();
   }
}
