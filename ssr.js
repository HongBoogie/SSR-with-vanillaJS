import { TodoList } from "./components";

export const generateHTML = (model) => `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Todo List</title>
    </head>
    <body>
    <div id="app">
      ${TodoList(model.todoItems)}
    </div>
    </body>
    </html>
`;
