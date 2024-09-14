import express from "express";
import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";

const app = express();
app.use(express.json());

app.use("/src", express.static("./src"));

app.get("/", (req, res) => res.send(generateHTML({ todoItems: ["test"] })));

app.put("/api/todo-items", (req, res) => {
  model.init({ todoItems: req.body.todoItems });
  res.status(200).send(model.todoItems);
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
