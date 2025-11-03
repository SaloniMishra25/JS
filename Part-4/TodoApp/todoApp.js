//Todo App
let todo = [];

let req = prompt("What would you like to do? (add/list/delete/quit)");

while (true) {
  if (req == "quit") {
    console.log("Exiting Todo App. Goodbye!");
    break;
  }
  if (req == "list") {
    console.log("Your Todo List: ");
    console.log("----------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------------");
  } else if (req == "add") {
    let task = prompt("Enter the task you want to add: ");
    todo.push(task);
    console.log(`"${task}" added to your list!`);
  } else if (req == "delete") {
    let idx = prompt("Enter the task index to delete:");
    let removed = todo.splice(idx, 1);
    console.log(` Deleted: "${removed}"`);
  } else {
    console.log("Invalid command! Please try again.");
  }
  req = prompt("What would you like to do next? (add / list / delete / quit)");
}
