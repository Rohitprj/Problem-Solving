import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getData = async () => {
  try {
    const response: AxiosResponse<Todo> = axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    console.log(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};

// axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//   console.log(res.data);
// });

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
