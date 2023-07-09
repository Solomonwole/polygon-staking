import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";

function AllValidators() {
  return (
    <Box
      sx={{
        paddingBottom: "30px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow:
          "0px 12px 8px 0px rgba(0, 0, 0, 0.02), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          type="search"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography
            variant="caption"
            color="#000"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            Sort By
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={filterDrop}
            sx={{ width: 300, textTransform: "capitalize" }}
            renderInput={(params) => <TextField {...params} label="filter" />}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default AllValidators;

const filterDrop = [
  { label: "performance" },
  { label: "commission" },
  { label: "stake" },
  { label: "random" },
];
