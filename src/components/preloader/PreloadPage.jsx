import { Box } from "@mui/material";
import React from "react";
import Preloader from "./Preloader";

function PreloadPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Preloader />
    </Box>
  );
}

export default PreloadPage;
