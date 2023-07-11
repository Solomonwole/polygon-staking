import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import PageRoutes from "./router/PageRoutes";
import theme from "./mui/theme";
import { Box } from "@mui/material";

function App() {
  useEffect(() => {
    localStorage.setItem("btnText", "Switch to testnet");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          overflowX: "hidden",
        }}
      >
        <PageRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
