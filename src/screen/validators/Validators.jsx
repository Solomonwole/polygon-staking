import { Box, Container, Typography } from "@mui/material";
import React from "react";
import theme from "../../mui/theme";
import AllValidators from "../home/component/AllValidators";

function Validators() {
  return (
    <Box>
      <Box
        sx={{
          height: "245px",
          width: "100%",
          background: theme.palette.primary.main,
          paddingTop: "50px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1">All Validators</Typography>
        </Container>
      </Box>

      <Container>
        <AllValidators />
      </Container>
    </Box>
  );
}

export default Validators;
