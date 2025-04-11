import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
