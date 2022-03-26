import { Fragment } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { ListTodo, InputTodo } from "./Import/Index";
function App() {
  return (
    <Fragment>
      <ToastContainer position="top-center" />
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
