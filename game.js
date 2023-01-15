let form = document.querySelector("#todo-form");
let input = document.querySelector("#todo-input");
let list = document.querySelector("#todo-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let task = input.value;
  if (task) {
    addTask(task);
    input.value = "";
  }
});

function addTask(task) {
  let li = document.createElement("li");
  li.innerHTML = task;
  list.appendChild(li);
}
