import React from "react";
import Book from "./Book";
import { useStore } from "./store";

const getFilteredTodoList = (todos, filter) => {
  return todos.filter((todo) => {
    if (filter === "Read") {
      return todo.complete;
    } else if (filter === "Reading") {
      return !todo.complete;
    } else {
      return todo;
    }
  });
};

const TodoList = () => {
  const todoListFromStore = useStore((state) => state.todoList);
  const filterFromStore = useStore((state) => state.filter);
  const setFilterFromStore = useStore((state) => state.setFilter);
  return (
    <ul>
      {getFilteredTodoList(todoListFromStore, filterFromStore).map((todo) => {
        return <Book key={todo.id} todo={todo} />;
      })}
      <button onClick={() => setFilterFromStore("Read")}>Read</button>
      <button onClick={() => setFilterFromStore("Reading")}>Reading</button>
      <button onClick={() => setFilterFromStore("All")}>All</button>
    </ul>
  );
};

export default TodoList;
