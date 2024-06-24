import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../features/tasks/tasksSlice";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Paper,
  Tooltip,
} from "@mui/material";
import {
  Delete,
  Edit,
  CheckCircleOutline,
  RadioButtonUnchecked,
} from "@mui/icons-material";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    const newTaskText = prompt(
      "Edit Task:",
      tasks.find((task) => task.id === id).text
    );
    if (newTaskText) {
      dispatch(editTask({ id, text: newTaskText }));
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={3}
      sx={{ width: "100%" }}
    >
      <Typography variant="h6" gutterBottom>
        Task List
      </Typography>
      <Paper
        elevation={3}
        sx={{ width: "100%", padding: 2, backgroundColor: "#e8f5e9" }}
      >
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              secondaryAction={
                <Box>
                  <Tooltip title="Mark as Complete">
                    <IconButton
                      edge="end"
                      aria-label="toggle"
                      onClick={() => handleToggle(task.id)}
                    >
                      {task.completed ? (
                        <CheckCircleOutline color="success" />
                      ) : (
                        <RadioButtonUnchecked />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit Task">
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEdit(task.id)}
                    >
                      <Edit color="secondary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Task">
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(task.id)}
                    >
                      <Delete color="error" />
                    </IconButton>
                  </Tooltip>
                </Box>
              }
            >
              <ListItemText
                primary={task.text}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default TaskList;
