import { axiosInstance } from "./instance";

// Todo List 가져오기
export const getTodoApi = async () => {
  const data: TodoData[] = await axiosInstance.get("/todos");
  return data;
};

// Todo 생성하기
export const createTodoApi = async (todo: string) => {
  const data: TodoData = await axiosInstance.post("/todos", { todo });
  return data;
};

// Todo 수정하기
export const updateTodoApi = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const data: TodoData = await axiosInstance.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  return data;
};

// Todo 삭제하기
export const deleteTodoApi = async (id: number) => {
  const data = await axiosInstance.delete(`/todos/${id}`);
  return data;
};
