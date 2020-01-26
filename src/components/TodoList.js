import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Todo = styled.span`
  color: blue;
  &.complete {
    color: red;
  }
  font-size: 1em;
`;

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = id =>
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    });

  const deleteTodo = id =>
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo.id)}
          />
          <Todo className={todo.complete ? "complete" : null}>{todo.name}</Todo>
          <span onClick={() => deleteTodo(todo.id)}>Delete</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
