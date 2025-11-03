let input = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
  let task = input.value.trim();

  if (task === "") return; //stop emply input

  //create li
  let li = document.createElement("li");
  
  let taskText = document.createElement("span");
  taskText.innerText = task;
  li.appendChild(taskText);

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");

  editBtn.addEventListener("click", function () {
    let newText = prompt("edit your task : ", taskText.innerText);

    if (newText !== null && newText.trim() !== "") {
      taskText.innerText = newText;
    }
  });

  //create delete button
  let del = document.createElement("button");
  del.innerText = "Delete";
  del.classList.add("deleteBtn");

  // delete item on button click
  del.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(editBtn);
  li.appendChild(del);

  list.appendChild(li);

  input.value = ""; //clear input;
});
