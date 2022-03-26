import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { HomeMain, EditTodo, DetailTodo } from "./Import/Index";
function App() {
  return (
    <Fragment>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/todo/:id" element={<DetailTodo />} />
      </Routes>
    </Fragment>
  );
}

export default App;
