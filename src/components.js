export const TodoItem = (item) => `<li>${item}</li>`;
export const TodoList = (items) => `<ul>${items.map(TodoItem).join("")}</ul>`;

export const Button = ({ id, text }) => `<button id="${id}">${text}</button>`;

export const App = (todoItems) => `
  ${Button({ id: "add", text: "Add Todo Item" })}
  ${Button({ id: "remove", text: "Remove Todo Item" })}
  ${TodoList(todoItems)}
`;
