import { Fragment } from "react";
import { InputTodo, ListTodo } from "../Import/Index";
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
