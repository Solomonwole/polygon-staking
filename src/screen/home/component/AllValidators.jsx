import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Autocomplete,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { BsListUl } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import appContext from "../../../context/AppContext";

function AllValidators() {
  const navigate = useNavigate();
  const [setGrid, setSetGrid] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState(null);

  const { validators, setValidators } = useContext(appContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://staking-api-testnet.polygon.technology/api/v2/validators?limit=100&offset=0&sortBy=delegatedStake"
        );

        if (response.ok) {
          const data = await response.json();
          setValidators(data.result);
          console.log("validators: ", validators);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [setValidators, validators]);

  const formatStakedValue = (value) => {
    const formattedValue = value.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
    if (formattedValue.length > 8) {
      return formattedValue.slice(0, 10);
    }
    return formattedValue;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event, newValue) => {
    setFilterOption(newValue);
  };

  const filteredValidators = validators.filter((validator) => {
    if (filterOption) {
      // Apply filter if a filter option is selected
      return validator.name
        .toLowerCase()
        .includes(filterOption.label.toLowerCase());
    } else {
      // Apply search query if no filter option is selected
      return validator.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  return (
    <Box
      sx={{
        paddingBottom: "30px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow:
          "0px 12px 8px 0px rgba(0, 0, 0, 0.02), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
        margin: "20px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "20px",
        }}
      >
        <TextField
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
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
            value={filterOption}
            onChange={handleFilterChange}
            sx={{ width: 300, textTransform: "capitalize" }}
            renderInput={(params) => <TextField {...params} label="filter" />}
          />

          <IconButton
            sx={{
              border: "2px solid #d7d7d7",
              borderRadius: "5px",
              background: setGrid ? "#292C34" : "",
              color: setGrid ? "#fff" : "",

              "&:hover": {
                background: setGrid ? "#292C34" : "",
                color: setGrid ? "#fff" : "",
              },
            }}
            onClick={() => setSetGrid(true)}
          >
            <RxDashboard />
          </IconButton>

          <IconButton
            sx={{
              border: "2px solid #d7d7d7",
              borderRadius: "5px",
              background: !setGrid ? "#292C34" : "",
              color: !setGrid ? "#fff" : "",

              "&:hover": {
                background: !setGrid ? "#292C34" : "",
                color: !setGrid ? "#fff" : "",
              },
            }}
            onClick={() => setSetGrid(false)}
          >
            <BsListUl />
          </IconButton>
        </Stack>
      </Box>

      {!setGrid && (
        <Box>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Stake</TableCell>
                <TableCell>Commission</TableCell>
                <TableCell>Checkpoints Signed</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredValidators.map((validator, index) => (
                <TableRow
                  key={validator.id}
                  onClick={() => navigate("")}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>
                    <Stack direction="row" alignItems="center">
                      <img
                        src="https://staking.polygon.technology/assets/img/profile.svg"
                        alt=""
                        style={{
                          marginRight: "10px",
                        }}
                      />
                      {validator.name || `Anonymous 3${index}`}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {formatStakedValue(validator.totalStaked)} &nbsp;
                    <Typography
                      component="span"
                      sx={{
                        color: "#b0b4bb",
                      }}
                    >
                      MATIC
                    </Typography>
                  </TableCell>
                  <TableCell>{validator.commissionPercent}%</TableCell>
                  <TableCell>{validator.uptimePercent}%</TableCell>
                  <TableCell>
                    {validator.uptimePercent !== 0 ? (
                      <Button
                        variant="contained"
                        sx={{
                          background: "#F7F7F8",
                          color: "#c9c9c9",
                          boxShadow: "none",
                        }}
                      >
                        Delegate
                      </Button>
                    ) : (
                      <Typography
                        sx={{
                          color: "#f00",
                        }}
                      >
                        Offline since
                        <br /> 2100 checkpoints
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}

      {setGrid && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "1fr 1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
          }}
        >
          {filteredValidators.map((validator, index) => (
            <Box
              key={validator.id}
              sx={{ border: "0.1px solid #dcdcdc99", padding: "20px" }}
            >
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <img
                    src="https://staking.polygon.technology/assets/img/profile.svg"
                    alt=""
                    style={{
                      marginRight: "10px",
                      height: "64px",
                      width: "64px",
                    }}
                  />
                  <Typography variant="h4">
                    {validator.name || `Anonymous 3${index}`}
                  </Typography>
                  <Typography variant="body2">
                    {formatStakedValue(validator.totalStaked)} &nbsp;{" "}
                    <Typography
                      component="span"
                      sx={{
                        color: "#b0b4bb",
                      }}
                    >
                      MATIC
                    </Typography>
                  </Typography>
                </Stack>

                <Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Commission</Typography>
                    <Typography sx={{ color: "#319a8d" }}>
                      {validator.commissionPercent}%
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Checkpoints Signed</Typography>
                    <Typography sx={{ color: "#6433b9" }}>
                      {validator.uptimePercent}%
                    </Typography>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {validator.uptimePercent !== 0 ? (
                    <Button
                      variant="contained"
                      sx={{
                        background: "#F7F7F8",
                        color: "#c9c9c9",
                        boxShadow: "none",
                        width: "100%",
                      }}
                    >
                      Delegate
                    </Button>
                  ) : (
                    <Typography
                      sx={{
                        color: "#f00",
                      }}
                    >
                      Offline since
                      <br /> 2100 checkpoints
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default AllValidators;

const filterDrop = [{ label: "PoS" }, { label: "Test" }];
