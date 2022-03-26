import { Fragment, useState, useRef } from "react";
import { useMutation } from "../Import/Index";
import { CreateTodo, EditTodoApi } from "../Import/Import";
const InputTodo = (data) => {
  const titleRef = useRef();
  const { mutate, loading } = useMutation();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const children = titleRef.current.children;
      const newData = [...children].reduce((obj, child) => {
        if (!child.name) return obj;
        return { ...obj, [child.name]: child.value };
      }, {});

      mutate(() => CreateTodo(newData));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" ref={titleRef} onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          name="description"
          defaultValue={data?.description}
        />
        <button disabled={loading} className="btn btn-success">
          {loading ? "Loading..." : "Add"}
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
