import express from "express";
import { generateHTML } from "./ssr.js";
import { model } from "./model.js";

const app = express();

app.get("/", (req, res) => {
  res.send(generateHTML(model));
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
