import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteDoneTasks, removeAllTodos } from "../../store/reducer/reducerTodos";
import { AppDispatch } from "../../store/store";

const BottomButtons = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ButtonGroup fullWidth disableElevation variant="contained">
      <Button
        data-testid="buttonDeleteAllTasks"
        onClick={() => {
          dispatch(removeAllTodos());
        }}
      >
        Delete All tasks
      </Button>
      <Button
        data-testid="buttonDeleteDoneTasks"
        onClick={() => {
          dispatch(deleteDoneTasks());
        }}
      >
        Delete done tasks
      </Button>
    </ButtonGroup>
  );
};

export default BottomButtons;
