import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  todoList: [],
  filter: "All",
  book: undefined,
  // bookTitle: undefined,
  updateFormBookTitleFunction: undefined,
  // just zustand:
  // add: (title) => set((state) => ({ todos: [...state.todos, { title }] }))
  // using immer with zustand
  // setBookTitle: (title) =>
  //   set(
  //     produce((state) => {
  //       state.bookTitle = title;
  //     })
  //   ),
  setUpdateFormBookTitleFunction: (setTitleFunction) =>
    set(
      produce((state) => {
        state.updateFormBookTitleFunction = setTitleFunction;
      })
    ),
  addBook: (title) =>
    set(
      produce((state) => {
        if (title || title.trim().length > 0) {
          state.todoList.push({
            // id: state.todoList.length + 1,
            id: `${Date.now()}`, // make key unique so not to mess up delete
            title,
            complete: false
          });
        } else {
          console.log("Please enter Book Title");
        }
        // hide update book form if it is currently displayed
        state.book = undefined;
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
        // hide update book form if it is currently displayed
        state.book = undefined;
      })
    ),
  removeBook: (bookId) =>
    set(
      produce((state) => {
        state.todoList = state.todoList.filter((todo) => todo.id !== bookId);
        // hide update book form if it is currently displayed
        state.book = undefined;
      })
    ),
  loadUpdateForm: (book) =>
    set(
      produce((state) => {
        state.book = book;
        state.bookTitle = book.title;
        state.updateFormBookTitleFunction(book.title);
      })
    ),
  setFilter: (filter) =>
    set(
      produce((state) => {
        state.filter = filter;
        // hide update book form if it is currently displayed
        state.book = undefined;
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
        // hide update book form if it is currently displayed
        state.book = undefined;
      })
    )
}));
