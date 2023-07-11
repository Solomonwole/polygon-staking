import { Box, Stack, Typography, Container } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ background: "#F6F4FA", padding: "10px 0" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography
              variant="body1"
              sx={{ color: "#b0b4bb", fontSize: "14px" }}
            >
              © 2023 Polygon Labs UI (Cayman) Ltd. | All rights reserved
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="body1"
              sx={{ color: "#b0b4bb", fontSize: "14px" }}
            >
              Cookie Policy
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#b0b4bb", fontSize: "14px" }}
            >
              Terms of Use
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#b0b4bb", fontSize: "14px" }}
            >
              Privacy Policy
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
