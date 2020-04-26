import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(({ data }) => {
  const { title, completed, id } = data as Todo;

  consoleTodo(id, title, completed);
});

const consoleTodo = (id: number, title: string, completed: boolean) => {
  return console.log(`id: ${id} title:"${title}" completed:${completed}`);
};
