import axios from "axios";
import { Dispatch } from "redux";

import { ActionsTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionsTypes.fetchTodos;
  payload: Todo[];
}
export interface DeleteTodoAction {
  type: ActionsTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = (): Function => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionsTypes.fetchTodos,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionsTypes.deleteTodo,
    payload: id,
  };
};
