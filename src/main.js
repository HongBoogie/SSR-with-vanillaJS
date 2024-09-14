import { App } from "./components.js";
import { model } from "./model.js";

function updateTodoItems(todoItems) {
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify({ todoItems });
  return fetch("/api/todo-items", { method: "PUT", headers, body }).then(
    (res) => res.json()
  );
}

async function syncServerModel() {
  const newTodoItems = await updateTodoItems(model.todoItems);
  model.init({ todoItems: newTodoItems });
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = App(model.todoItems);

  $app.querySelector("#add").onclick = async () => {
    model.addTodoItem("new Item");
    syncServerModel().then(render);
  };

  $app.querySelector("#remove").onclick = () => {
    model.removeTodoItem(model.todoItems.length - 1);
    syncServerModel().then(render);
  };
}

function main() {
  model.init(window.__INITIAL_MODEL__);
  render();
}

main();
