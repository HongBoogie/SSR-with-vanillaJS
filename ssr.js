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
    <script>
      document.querySelector('#add').onclick = 
        () => fetch('/api/todo-items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: 'New Item' }),
        }).then(() => location.reload());

        document.querySelector('#remove').onclick = () => {
          fetch('/api/todo-items/0', { method: 'delete' }).then(() => location.reload());}
    </script>
    </body>
    </html>
`;
