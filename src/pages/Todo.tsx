import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import TodoList from "../components/TodoList";
import TodoContext from "../contexts/TodoContext";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const todoValue = useContext(TodoContext);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput.length <= 0) return;
    todoValue?.actions.addTodo(todoInput);
    setTodoInput("");
  };

  // useEffect(() => {
  //   todoValue?.actions.fetchTodo();
  // }, []);

  return (
    <TodoWrapper>
      <TodoContainer>
        <div className="title">Todo List</div>
        <form className="content" onSubmit={handleSubmit}>
          <input
            data-testid="new-todo-input"
            type="text"
            value={todoInput}
            placeholder="할일을 작성해주세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoInput(e.target.value)
            }
          />
          <button data-testid="new-todo-add-button" type="submit">
            추가
          </button>
        </form>
        <TodoList />
      </TodoContainer>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TodoContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 50px 100px;
  width: 50%;

  .title {
    font-size: 50px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .content {
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    input {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
      width: 300px;
      flex-grow: 1;
    }

    button {
      display: inline-block;
      word-break: keep-all;
      background-color: white;
      outline: none;
      border: 1px solid lightgray;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background-color: lightgray;
      }
    }
  }
`;

export default Todo;
