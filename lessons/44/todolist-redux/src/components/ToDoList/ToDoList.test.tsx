import { render, screen, fireEvent } from "@testing-library/react";
import ToDoList from ".";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";

// import { editTodo } from "../../store/reducer/reducerTodos";

// const mockDispatch = jest.fn();

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: () => mockDispatch,
//   useEffect: jest.fn((fn) => fn()),
//   useSelector: jest.fn((fn) => fn()),
// }));

// jest.mock("../../store/reducer/reducerTodos", () => ({
//   editTodo: jest.fn(),
// }));

describe("TodoList", () => {
  it("filter Done", () => {
    const fakeStore = [{ id: "string", description: "string", completed: true, edit: false }];
    const mockedStore = createStore((state) => fakeStore);
    render(
      <Provider store={mockedStore}>
        <ToDoList filterList={"Done"} />
      </Provider>
    );
    expect(screen.getByTestId("CreateIcon")).toBeInTheDocument();
  });

  it("filter Todo", () => {
    const fakeStore = [{ id: "string", description: "string", completed: false, edit: false }];
    const mockedStore = createStore((state) => fakeStore);
    render(
      <Provider store={mockedStore}>
        <ToDoList filterList={"Todo"} />
      </Provider>
    );
    expect(screen.getByTestId("CreateIcon")).toBeInTheDocument();
  });

  it("renders TodoList component", () => {
    const fakeStore = [{ id: "string", description: "string", completed: false, edit: false }];
    const mockedStore = createStore((state) => fakeStore);
    const component = (
      <Provider store={mockedStore}>
        <ToDoList filterList={"All"} />
      </Provider>
    );
    render(component);
    expect(screen.getByTestId("CreateIcon")).toBeInTheDocument();
  });

  it("complishen todo", () => {
    const fakeStore = [{ id: "string", description: "string", completed: false, edit: false }];
    const mockedStore = createStore((state) => fakeStore);
    const component = (
      <Provider store={mockedStore}>
        <ToDoList filterList={"All"} />
      </Provider>
    );
    render(component);
    // screen.debug();
    let containerStyle = screen.getByTestId("todoTextDiv");
    let styles = getComputedStyle(containerStyle);
    expect(styles.textDecoration).toBe("none");

    const checkbox = screen.getByTestId("checkboxTodo");
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    // expect(checkbox).toBeChecked();

    containerStyle = screen.getByTestId("todoTextDiv");
    styles = getComputedStyle(containerStyle);
    expect(styles.textDecoration).toBe("line-through");

    // const wrapper = mount(component);
    // const checkBox = wrapper.find(Checkbox);
    // checkBox.simulate("change", { target: { checked: true } });

    // wrapper.update();

    // expect(wrapper.find(Checkbox).props().checked).toBe(true);
    // checkBox.simulate("change", { target: { checked: true } });

    // wrapper.update();

    // expect(wrapper.find(Checkbox).props().checked).toBe(true);
    // const containerStyle = comp.find("todoTextDiv");
    // const styles = getComputedStyle(containerStyle);
    // expect(styles.textDecoration).toBe("none");

    // const checkbox = comp.find({ type: "checkbox" });
    // const checkbox = screen
    //   .getByTestId("CheckBoxOutlineBlankIcon")
    //   .querySelector('input[type="checkbox"]');

    // expect(checkbox).not.toBeChecked();
    // userEvent.click(checkbox);
    // expect(checkbox).toBeChecked();

    // expect(styles.textDecoration).toBe("line-through");
  });

  it("edit todo", () => {
    const fakeStore = [{ id: "string", description: "string", completed: false, edit: false }];
    const mockedStore = createStore((state) => fakeStore);
    const component = (
      <Provider store={mockedStore}>
        <ToDoList filterList={"All"} />
      </Provider>
    );
    render(component);
    const editButton = screen.getByTestId("editTodo");
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    const editTodoInput = screen.getByTestId("editTodoInput") as HTMLInputElement;
    expect(editTodoInput).toBeInTheDocument();
    fireEvent.change(editTodoInput, { target: { value: "test" } });
    expect(editTodoInput).toHaveValue("test");
    fireEvent.click(editButton);
    const todoText = screen.getByTestId("todoText");
    expect(todoText).toHaveTextContent("test");
  });
});
