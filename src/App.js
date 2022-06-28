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
      <div className="mydiv">
        <a href="https://icons8.com/icon/DneRDsWrWaV4/delete">delete</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
        <br />
        <a href="https://icons8.com/icon/BYl75KbLHhtd/edit">edit</a> icon by{" "}
        <a href="https://icons8.com">Icons8</a>
      </div>
    </div>
  );
}

export default App;
