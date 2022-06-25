import React, { useState } from "react";
import { useStore } from "./store";

const TodoForm = () => {
  const [userInput, setUserInput] = useState("");
  const addBookFromStore = useStore((state) => state.addBook);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTask(userInput); // original
    addBookFromStore(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add new Book"
        value={userInput}
        type="text"
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
