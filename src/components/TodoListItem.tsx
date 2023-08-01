import React, { useRef, useState } from "react";
import { styled } from "styled-components";

type Props = {
  todoItem: TodoData;
  callbacks: CallbacksType;
};

const TodoListItem = ({ todoItem, callbacks }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todoItem.todo);
  const editref = useRef<HTMLInputElement>(null);

  const handleEditSubmit = () => {
    if (editInput.trim().length <= 0) return editref.current?.focus();
    callbacks.updateTodo(todoItem.id, editInput, todoItem.isCompleted);
    setIsEditing(false);
  };

  return (
    <TodoItem>
      {isEditing ? (
        <input
          data-testid="modify-input"
          className="edit-task"
          value={editInput}
          ref={editref}
          autoFocus
          onChange={(e) => setEditInput(e.target.value)}
        />
      ) : (
        <label>
          <input
            type="checkbox"
            checked={todoItem.isCompleted}
            onChange={() =>
              callbacks.updateTodo(
                todoItem.id,
                todoItem.todo,
                !todoItem.isCompleted
              )
            }
          />
          <span className="task">{todoItem.todo}</span>
        </label>
      )}
      <div className="btn-wrapper">
        {isEditing ? (
          <>
            <button data-testid="submit-button" onClick={handleEditSubmit}>
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={() => {
                setIsEditing(false);
                setEditInput(todoItem.todo);
              }}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              data-testid="modify-button"
              onClick={() => setIsEditing(true)}
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={() => callbacks.deleteTodo(todoItem.id)}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </TodoItem>
  );
};

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    /* border: 1px solid red; */
    max-width: 66%;
    /* flex-grow: 1; */
  }
  .blank {
    flex-grow: 1;
  }
  input {
    margin: 0;
    min-width: 20px;
    min-height: 20px;
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

  .edit-task {
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    flex-grow: 1;
  }

  .task {
    /* flex-grow: 1; */
    word-break: break-word;
    /* border: 1px solid blue; */
  }

  .btn-wrapper {
    display: flex;
    gap: 5px;
  }
`;

export default TodoListItem;
