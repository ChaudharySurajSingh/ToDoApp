import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
      saveState(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      saveState(newState);
      return newState;
    },
    editTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        saveState(state);
      }
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveState(state);
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
