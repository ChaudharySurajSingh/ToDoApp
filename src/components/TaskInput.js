import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { TextField, Button, Box, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        marginBottom: 3,
        width: "100%",
        backgroundColor: "#e3f2fd",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField
          label="New Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          sx={{ marginRight: 2, flex: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          startIcon={<Add />}
          sx={{ flexShrink: 0 }}
        >
          Add Task
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskInput;
