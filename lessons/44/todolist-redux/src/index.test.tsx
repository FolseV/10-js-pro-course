// import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import App from "./App";
// import { store } from "./store/store";
// import ReactDOM from "react-dom";

// describe("index", () => {
//   const component = (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   it("render index", () => {
//     const spy = jest.spyOn(ReactDOM, "render");
//     render(component);
//   });
// });
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

it("renders without crashing", () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const div = document.createElement("div");
  ReactDOM.render(component, div);
});
