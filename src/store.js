import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  todoList: [],
  filter: "All",
  book: undefined,
  // just zustand:
  // add: (title) => set((state) => ({ todos: [...state.todos, { title }] }))
  // using immer with zustand
  addBook: (title) =>
    set(
      produce((state) => {
        state.todoList.push({
          // id: state.todoList.length + 1,
          id: `${Date.now()}`, // make key unique so not to mess up delete
          title,
          complete: false
        });
      })
    ),
  updateBook: (id, newTitle) =>
    set(
      produce((state) => {
        if (id && newTitle) {
          state.todoList.forEach((book) => {
            if (book.id === id) book.title = newTitle;
          });
        }
        state.book = undefined;
      })
    ),
  removeBook: (bookId) =>
    set(
      produce((state) => {
        state.todoList = state.todoList.filter((todo) => todo.id !== bookId);
      })
    ),
  loadUpdateForm: (book) =>
    set(
      produce((state) => {
        state.book = book;
      })
    ),
  setFilter: (filter) =>
    set(
      produce((state) => {
        state.filter = filter;
      })
    ),
  handleToggle: (id) =>
    set(
      produce((state) => {
        state.todoList = state.todoList.map((task) => {
          return task.id === id
            ? { ...task, complete: !task.complete }
            : { ...task };
        });
      })
    )
}));
