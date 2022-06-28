import React, { useState } from "react";
import { useStore } from "./store";

const UpdateBookForm = () => {
  const bookFromStore = useStore((state) => state.book);
  const updateBook = useStore((state) => state.updateBook);
  const [newBookTitle, setNewBookTitle] = useState("");

  const handleChange = (e) => {
    setNewBookTitle(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    // console.log("handle submit update ", bookFromStore?.id);
    updateBook(bookFromStore?.id, newBookTitle);
    setNewBookTitle("");
  };
  return (
    <div className={bookFromStore ? "mydiv" : "mydiv hidden"}>
      <input
        placeholder="Update Book"
        value={newBookTitle}
        type="text"
        onChange={handleChange}
      />
      <button onClick={() => handleSubmit(newBookTitle)}>Edit</button>
    </div>
  );
};

export default UpdateBookForm;
