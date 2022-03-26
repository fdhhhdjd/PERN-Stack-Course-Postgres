import axios from "axios";

export const getAllTodo = () => {
  return "/todos";
};
export const getIdTodo = (id) => {
  return `/todos/${id}`;
};
export const CreateTodo = async (data) => {
  return axios.post("/todos", data);
};
export const EditTodoApi = (data) => {
  return axios.put(`/todos/${data.id}`, data.body);
};
export const DeleteTodo = (id) => {
  return axios.delete(`/todos/${id}`);
};
