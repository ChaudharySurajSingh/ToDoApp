import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#4caf50", // Green
    },
    warning: {
      main: "#ffeb3b", // Yellow
    },
    background: {
      default: "#f0f2f5",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
