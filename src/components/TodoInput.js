import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = todo =>
    dispatch({
      type: "ADD_TODO",
      payload: todo
    });

  const onChange = event => {
    setTodo(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo.trim() === "") return;

    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        name="todo"
        onChange={onChange}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoInput;
