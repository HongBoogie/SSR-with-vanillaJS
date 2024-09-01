import { TodoList, Button } from "./components.js";

export const generateHTML = (model) => `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Todo List</title>
    </head>
    <body>
    <div id="app">
      ${Button({ id: "add", text: "Add Todo Item" })}
      ${Button({ id: "remove", text: "Remove Todo Item" })}
      ${TodoList(model.todoItems)}
    </div>
    <script src="./src/main.js"></script>
    </body>
    </html>
`;
