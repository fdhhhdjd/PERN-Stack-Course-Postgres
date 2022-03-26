const pool = require("../config/db.js");
const TodoListCtrl = {
  CreateTodo: async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );
      res.json({
        status: 200,
        msg: "Create Todo Success",
        data: newTodo.rows[0],
      });
    } catch (err) {
      console.error(err.message);
    }
  },
  GetAllTodo: async (req, res) => {
    try {
      const allTodo = await pool.query("SELECT * FROM todo");
      res.json({
        status: 200,
        msg: "Get All Todo Success",
        data: allTodo.rows,
      });
    } catch (err) {
      console.error(err.message);
    }
  },
  GetIdTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const GetTodoId = await pool.query(
        "SELECT * FROM todo WHERE todo_id=$1",
        [id]
      );
      res.json({
        status: 200,
        msg: `Get Todo ${id} Successfully`,
        data: GetTodoId.rows,
      });
    } catch (error) {
      console.error(err.message);
    }
  },
  EditTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2", [
        description,
        id,
      ]);
      res.json({
        status: 200,
        msg: "Edit Todo Success",
      });
    } catch (err) {
      console.error(err.message);
    }
  },
  DeleteTodo: async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query("DELETE FROM todo Where todo_id=$1 ", [id]);
      res.json({
        status: 200,
        msg: "Delete Todo Successfully",
      });
    } catch (error) {
      console.error(err.message);
    }
  },
};
module.exports = TodoListCtrl;
