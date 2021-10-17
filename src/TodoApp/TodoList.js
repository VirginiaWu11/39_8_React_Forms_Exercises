import { useState } from "react";
import Box from "./Todo";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import useLocalStorage from "../hooks.js/useLocalStorage";

const TodoList = () => {
  const INITIAL_TODOS = [
    { id: uuid(), task: "wash dishes" },
    { id: uuid(), task: "do laundry" },
    { id: uuid(), task: "sweep" },
    { id: uuid(), task: "wash dishes" },
  ];
  const [todos, setTodos] = useLocalStorage("todos", INITIAL_TODOS);

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const deleteTodo = (boxId) => {
    setTodos((todos) => todos.filter((b) => b.id !== boxId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ task, id }) => (
          <Box deleteTodo={() => deleteTodo(id)} task={task} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
