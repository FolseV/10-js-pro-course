import { configureStore } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";
import { perma } from "./middleware/perma";
import reducerTodos from "./reducer/reducerTodos";

//for tests
const preloadedState: Todo[] = [
  { id: "string", description: "string", completed: false, edit: false },
  // { id: "string2", description: "string", completed: true, edit: false },
  // { id: "string3", description: "string", completed: false, edit: false },
];

//localstorage
// const preloadedState = JSON.parse(localStorage.getItem("state") || "");

export const store = configureStore({
  reducer: reducerTodos,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(perma),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
