import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import PageRoutes from "./router/PageRoutes";
import theme from "./mui/theme";

function App() {
  useEffect(() => {
    localStorage.setItem("btnText", "Switch to testnet");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <PageRoutes />
    </ThemeProvider>
  );
}

export default App;
