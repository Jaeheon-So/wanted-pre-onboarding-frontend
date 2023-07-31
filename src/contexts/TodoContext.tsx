import React, { useEffect, useState } from "react";
import {
  createTodoApi,
  deleteTodoApi,
  getTodoApi,
  updateTodoApi,
} from "../apis/todo";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export type TodoListContextValueType = {
  state: { todoList: TodoData[] };
  actions: {
    fetchTodo: () => void;
    addTodo: (todo: string) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: number, todo: string, isCompleted: boolean) => void;
  };
};

const TodoContext = React.createContext<TodoListContextValueType | null>(null);

// 간단한 버킷리스트 App
export const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<TodoData[]>([]);

  const fetchTodo = async () => {
    const todoListData = await getTodoApi();
    setTodoList(todoListData);
  };

  const addTodo = async (todo: string) => {
    const data = await createTodoApi(todo);
    setTodoList((prev) => [...prev, data]);
  };

  const deleteTodo = async (id: number) => {
    await deleteTodoApi(id);
    setTodoList((prev) => prev.filter((item) => id !== item.id));
  };

  const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
    const data = await updateTodoApi(id, todo, isCompleted);
    setTodoList((prev) => {
      const index = todoList.findIndex((todo) => todo.id === id);
      const newTodoList = prev.map((todo) => todo);
      newTodoList[index] = data;
      return newTodoList;
    });
  };

  const value: TodoListContextValueType = {
    state: { todoList },
    actions: {
      fetchTodo,
      addTodo,
      deleteTodo,
      updateTodo,
    },
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;
