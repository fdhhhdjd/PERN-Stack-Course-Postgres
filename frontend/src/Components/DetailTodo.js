import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { getIdTodo } from "../Import/Import";
import { useQuery, useMyContext } from "../Import/Index";
const DetailTodo = () => {
  const { id } = useParams();
  const { refetching } = useMyContext();
  const { todo, loading, error } = useQuery(getIdTodo(id), {
    saveCache: true,
    refetching,
  });

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
              <th>Back</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <Link to="/">
                    <button className="btn btn-success">Go Back</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default DetailTodo;
