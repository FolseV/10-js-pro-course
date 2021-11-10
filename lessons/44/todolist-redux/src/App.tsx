import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import BottomButtons from "./components/BottomButtons";
import ToDoCasual from "./components/ToDoCasual";
import ToDoList from "./components/ToDoList";

const App = () => {
  //mui alignment
  const [alignment, setAlignment] = React.useState("web");
  const [filterList, setFilterList] = React.useState("All");

  //mui function
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      {/* <ToDoCasual /> */}
      <Container maxWidth="xs">
        <AddTodos />

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          fullWidth
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="all" onClick={() => setFilterList("All")}>
            All
          </ToggleButton>
          <ToggleButton value="done" onClick={() => setFilterList("Done")}>
            Done
          </ToggleButton>
          <ToggleButton value="todo" onClick={() => setFilterList("Todo")}>
            Todo
          </ToggleButton>
        </ToggleButtonGroup>

        <ToDoList filterList={filterList} />

        <BottomButtons />
      </Container>
    </>
  );
};

export default App;
