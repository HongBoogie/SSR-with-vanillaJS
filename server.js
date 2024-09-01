import express from "express";
import { generateHTML } from "./ssr.js";
import { model } from "./model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(generateHTML(model));
});

app.post("/api/todo-items", (req, res) => {
  model.addTodoItem(req.body.content);
  res.status(201).send();
});

app.delete("/api/todo-items/:index", (req, res) => {
  model.removeTodoItem(req.params.index);
  res.status(204).send();
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
