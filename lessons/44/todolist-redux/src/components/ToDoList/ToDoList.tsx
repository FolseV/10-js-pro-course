import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, setTodoStatus, toggleEdit } from "../../store/reducer/reducerTodos";
import { AppDispatch, RootState } from "../../store/store";

interface Props {
  filterList: string;
}

const ToDoList: React.FC<Props> = (props) => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const filteredTodos = todoList.filter((todo) => {
    if (props.filterList === "Done") {
      return todo.completed;
    }
    if (props.filterList === "Todo") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <List>
      {filteredTodos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText
            data-testid="todoTextDiv"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.edit ? null : <span data-testid="todoText">{todo.description}</span>}
            {todo.edit && (
              <Input
                type="text"
                value={todo.description}
                inputProps={{ "data-testid": "editTodoInput" }}
                onChange={(e) => dispatch(editTodo({ id: todo.id, description: e.target.value }))}
              />
            )}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              data-testid="removeTodo"
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              data-testid="editTodo"
              onClick={() => {
                dispatch(
                  toggleEdit({
                    id: todo.id,
                    edit: !todo.edit,
                  })
                );
              }}
            >
              {todo.edit ? <SaveIcon /> : <CreateIcon />}
            </IconButton>
            {/* <FormControlLabel
              htmlFor="first-checkBox"
              label="First Checkbox"
              control={
                <Checkbox
                  edge="end"
                  value={todo.completed}
                  checked={todo.completed}
                  onChange={() => {
                    dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
                  }}
                  inputProps={{ "aria-labelledby": "primary checkbox" }}
                />
              }
            /> */}
            <input
              type="checkbox"
              data-testid="checkboxTodo"
              checked={todo.completed}
              onChange={() => {
                dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ToDoList;

/* 
   // <Checkbox
            //   // data-testid="todoComplishen"
            //   edge="end"
            //   checked={todo.completed}
            //   value={todo.completed}
            //   // inputProps={{ 'data-testid': `clickable-checkbox-1234` }} 
            //   data-testid={`todoComplishen`}
            //   // inputProps={{ "data-testid": "todoComplishen" }}
            //   onChange={() => {
            //     dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
            //   }}
            // />
*/
