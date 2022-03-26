import { Fragment } from "react";
import { useQuery, EditTodo, useMyContext, useMutation } from "../Import/Index";
import { getAllTodo, DeleteTodo } from "../Import/Import";
const ListTodo = () => {
  const { refetching } = useMyContext();
  const { mutate } = useMutation();
  const { todo, loading, error } = useQuery(getAllTodo(), {
    saveCache: true,
    refetching,
  });
  const deleteTodo = (id) => {
    if (window.confirm("Do you want to delete this ?")) {
      mutate(() => DeleteTodo(id));
    }
  };
  if (error) return <h1 className="text-center">{error}</h1>;
  return (
    <Fragment>
      {loading ? (
        <h1 className="text-center">...Loading</h1>
      ) : (
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default ListTodo;
