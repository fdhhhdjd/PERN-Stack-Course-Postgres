const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
dotenv.config({ path: ".env" });
const TodoListCtrl = require("./controller/TodoController.js");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//!route
app.post("/todos", TodoListCtrl.CreateTodo);
app.get("/todos", TodoListCtrl.GetAllTodo);
app.get("/todos/:id", TodoListCtrl.GetIdTodo);
app.put("/todos/:id", TodoListCtrl.EditTodo);
app.delete("/todos/:id", TodoListCtrl.DeleteTodo);

app.listen(process.env.PORT, () => {
  console.log(`Server has Start on port ${process.env.PORT}`);
});
