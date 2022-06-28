import React from "react";
import { useStore } from "./store";
import deleteButton from "../public/icons8-delete-64.png";
import editButton from "../public/icons8-edit-32.png";

const Todo = ({ book }) => {
  const handleToggleFromStore = useStore((state) => state.handleToggle);
  const removeBook = useStore((state) => state.removeBook);
  const loadUpdateForm = useStore((state) => state.loadUpdateForm);
  const handleClick = (e) => {
    e.preventDefault();
    handleToggleFromStore(e.currentTarget.id);
  };

  return (
    <>
      <li
        id={book.id}
        key={book.id + book.title}
        name="todo"
        value={book.id}
        onClick={handleClick}
        className={book.complete ? "todo strike" : "todo"}
      >
        {book.title} &nbsp;
      </li>
      <button onClick={() => removeBook(book.id)}>
        <img className="Image" src={deleteButton} alt="delete book" />
      </button>
      &nbsp;
      <button onClick={() => loadUpdateForm(book)}>
        <img className="Image" src={editButton} alt="update book" />
      </button>
      &nbsp;
      {/* <button onClick={() => removeBook(todo.id)}>Delete</button>&nbsp;
      <button onClick={() => loadUpdateForm(todo)}>Update</button> */}
    </>
  );
};

export default Todo;
