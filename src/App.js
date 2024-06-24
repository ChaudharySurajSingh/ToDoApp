import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Container, Typography, CssBaseline, Paper, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" className="App">
        <Box mt={5} width="100%">
          <Paper
            elevation={3}
            sx={{ padding: 4, borderRadius: 3, width: "100%" }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              To-Do List
            </Typography>
            <TaskInput />
            <TaskList />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
