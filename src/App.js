import React from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import UpdateBookForm from "./UpdateBookForm";

function App() {
  return (
    <div className="App">
      {/* <TodoForm addTask={addTask} /> */}
      <BookForm />
      {/* <TodoList
        todoList={todoList}
        filter={filter}
        setFilter={setFilter}
        handleToggle={handleToggle}
      /> */}
      <BookList />
      <UpdateBookForm />
    </div>
  );
}

export default App;
