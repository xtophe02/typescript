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

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionsTypes.fetchTodos,
      payload: res.data,
    });
  };
};
