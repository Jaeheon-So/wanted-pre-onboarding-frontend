import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { styled } from "styled-components";
import TodoContext from "../contexts/TodoContext";

const TodoList = () => {
  const todoValue = useContext(TodoContext);

  const todos = todoValue?.state.todoList.map((item) => {
    return (
      <TodoListItem
        key={item.id}
        todoItem={item}
        callbacks={todoValue.actions}
      />
    );
  });

  return <Container>{todos}</Container>;
};

const Container = styled.ul`
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default TodoList;
