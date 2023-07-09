import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Stack,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import appContext from "../../context/AppContext";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [menu, setMenu] = useState(false);
  const { onLoad, setOnLoad } = useContext(appContext);
  const [btnText, setBtnText] = useState(localStorage.getItem("btnText"));

  useEffect(() => {
    const hidePreloader = setTimeout(() => {
      setOnLoad(false);
    }, 7000);

    return () => {
      clearTimeout(hidePreloader);
    };
  }, [setOnLoad]);

  const handleBtnText = () => {
    if (btnText === "Switch to mainnet") {
      localStorage.setItem("btnText", "Switch to testnet");
      setBtnText("Switch to testnet");
    } else {
      localStorage.setItem("btnText", "Switch to mainnet");
      setBtnText("Switch to mainnet");
    }
  };

  const handleMenu = () => {
    setMenu(false);
  };
  return (
    <>
      {onLoad ? (
        ""
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              height: "84px",
              display: "flex",
              justifyContent: "center",
              // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
              marginBottom: "10px",
              background: "#fff",
            }}
          >
            <Container maxWidth="lg">
              <Toolbar
                sx={{
                  height: "84px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Link to="/">
                    <img
                      src="https://staking.polygon.technology/assets/img/navbar-logo.svg"
                      alt=""
                      style={{
                        height: "38px",
                        width: "138px",
                      }}
                    />
                  </Link>

                  <Typography
                    color="#52555d"
                    sx={{
                      fontSize: "28px",
                      fontWeight: 400,
                      marginTop: "-50px",
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    Stacking
                  </Typography>
                </Stack>

                <Box display={{ xs: "none", sm: "flex" }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                      variant="contained"
                      onClick={handleBtnText}
                      sx={{
                        background: "#F7F7F8",
                        color: "#52555D",
                        boxShadow: "none",
                        borderRadius: "20px",
                        width: "184px",
                        "&:hover": {
                          color: "#7b3fe4",
                          background: "#7b3fe440",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.33336 15.1967C6.15655 15.1967 5.98698 15.1265 5.86196 15.0014C5.73693 14.8764 5.66669 14.7069 5.66669 14.53V3.08171L1.94169 6.80671C1.81488 6.92162 1.64873 6.98336 1.47765 6.97914C1.30657 6.97493 1.14366 6.90509 1.02265 6.78408C0.901647 6.66307 0.831807 6.50017 0.827595 6.32909C0.823383 6.15801 0.885121 5.99186 1.00003 5.86504L5.85336 1.00004C5.94602 0.90389 6.06542 0.837779 6.19609 0.810276C6.32676 0.782773 6.46268 0.795145 6.58624 0.84579C6.7098 0.896434 6.8153 0.983016 6.88908 1.09432C6.96286 1.20562 7.00151 1.33652 7.00003 1.47004V14.53C7.00003 14.7069 6.92979 14.8764 6.80476 15.0014C6.67974 15.1265 6.51017 15.1967 6.33336 15.1967ZM10.1467 15L15 10.135C15.0645 10.0737 15.116 10.0001 15.1516 9.91849C15.1871 9.83692 15.206 9.74906 15.207 9.66008C15.2081 9.5711 15.1913 9.48281 15.1577 9.40042C15.1241 9.31802 15.0744 9.24318 15.0114 9.18032C14.9484 9.11745 14.8735 9.06783 14.791 9.03438C14.7086 9.00092 14.6203 8.98432 14.5313 8.98553C14.4423 8.98675 14.3545 9.00577 14.273 9.04146C14.1915 9.07716 14.1179 9.12881 14.0567 9.19338L10.3417 12.9184V1.47004C10.3417 1.29323 10.2715 1.12366 10.1464 0.998638C10.0214 0.873614 9.85184 0.803376 9.67503 0.803376C9.49821 0.803376 9.32865 0.873614 9.20362 0.998638C9.0786 1.12366 9.00836 1.29323 9.00836 1.47004V14.53C9.00822 14.662 9.04727 14.7911 9.12056 14.9009C9.19384 15.0107 9.29807 15.0962 9.42003 15.1467C9.50103 15.1796 9.58761 15.1966 9.67503 15.1967C9.76272 15.1966 9.84951 15.1791 9.93045 15.1454C10.0114 15.1116 10.0849 15.0622 10.1467 15Z"
                          fill="#292C34"
                          style={{
                            "&:hover": {
                              fill: "#7b3fe4",
                            },
                          }}
                        ></path>
                      </svg>{" "}
                      &nbsp;
                      {btnText}
                    </Button>
                    <Button variant="contained">Login</Button>
                  </Stack>
                </Box>

                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ display: { sm: "none" } }}
                >
                  {!menu ? (
                    <IoMenu
                      fontSize="35px"
                      color="#000"
                      onClick={() => setMenu(true)}
                    />
                  ) : (
                    <AiOutlineClose
                      color="#000"
                      onClick={() => setMenu(false)}
                    />
                  )}
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>

          <Container maxWidth="lg">
            <Box
              sx={{
                height: "60px",
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="nav"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <NavLink to="/">Overview</NavLink>
                <NavLink to="/validators">All Validators</NavLink>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <NavLink to="/rewards-calculator">Rewards Calculator</NavLink>
                <a
                  href="https://mumbai.polygonscan.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mumbai Explorer
                </a>
                <a
                  href="https://wiki.polygon.technology/docs/delegate/staking-faq/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FAQ
                </a>
                <a
                  href="https://support.polygon.technology/support/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Support
                </a>
              </Stack>
            </Box>

            <Box
              sx={{
                height: { xs: "60px", sm: "0" },
                display: { xs: "flex", sm: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  onClick={handleBtnText}
                  sx={{
                    background: "#F7F7F8",
                    color: "#52555D",
                    boxShadow: "none",
                    borderRadius: "20px",
                    width: "184px",
                    "&:hover": {
                      color: "#7b3fe4",
                      background: "#7b3fe440",
                      boxShadow: "none",
                    },
                  }}
                >
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.33336 15.1967C6.15655 15.1967 5.98698 15.1265 5.86196 15.0014C5.73693 14.8764 5.66669 14.7069 5.66669 14.53V3.08171L1.94169 6.80671C1.81488 6.92162 1.64873 6.98336 1.47765 6.97914C1.30657 6.97493 1.14366 6.90509 1.02265 6.78408C0.901647 6.66307 0.831807 6.50017 0.827595 6.32909C0.823383 6.15801 0.885121 5.99186 1.00003 5.86504L5.85336 1.00004C5.94602 0.90389 6.06542 0.837779 6.19609 0.810276C6.32676 0.782773 6.46268 0.795145 6.58624 0.84579C6.7098 0.896434 6.8153 0.983016 6.88908 1.09432C6.96286 1.20562 7.00151 1.33652 7.00003 1.47004V14.53C7.00003 14.7069 6.92979 14.8764 6.80476 15.0014C6.67974 15.1265 6.51017 15.1967 6.33336 15.1967ZM10.1467 15L15 10.135C15.0645 10.0737 15.116 10.0001 15.1516 9.91849C15.1871 9.83692 15.206 9.74906 15.207 9.66008C15.2081 9.5711 15.1913 9.48281 15.1577 9.40042C15.1241 9.31802 15.0744 9.24318 15.0114 9.18032C14.9484 9.11745 14.8735 9.06783 14.791 9.03438C14.7086 9.00092 14.6203 8.98432 14.5313 8.98553C14.4423 8.98675 14.3545 9.00577 14.273 9.04146C14.1915 9.07716 14.1179 9.12881 14.0567 9.19338L10.3417 12.9184V1.47004C10.3417 1.29323 10.2715 1.12366 10.1464 0.998638C10.0214 0.873614 9.85184 0.803376 9.67503 0.803376C9.49821 0.803376 9.32865 0.873614 9.20362 0.998638C9.0786 1.12366 9.00836 1.29323 9.00836 1.47004V14.53C9.00822 14.662 9.04727 14.7911 9.12056 14.9009C9.19384 15.0107 9.29807 15.0962 9.42003 15.1467C9.50103 15.1796 9.58761 15.1966 9.67503 15.1967C9.76272 15.1966 9.84951 15.1791 9.93045 15.1454C10.0114 15.1116 10.0849 15.0622 10.1467 15Z"
                      fill="#292C34"
                      style={{
                        "&:hover": {
                          fill: "#7b3fe4",
                        },
                      }}
                    ></path>
                  </svg>{" "}
                  &nbsp;
                  {btnText}
                </Button>
                <Button variant="contained" sx={{ width: "184px" }}>
                  Login
                </Button>
              </Stack>
            </Box>
          </Container>

          {menu && (
            <Box
              height="100vh"
              width="100%"
              sx={{ background: "#fff", zIndex: 10, position: "fixed" }}
            >
              <Container>
                <Box
                  component="ul"
                  sx={{
                    paddingTop: "30px",
                    li: {
                      listStyle: "none",
                    },
                  }}
                  className="nav"
                >
                  <li>
                    <NavLink to="/" onClick={handleMenu}>
                      Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/validators" onClick={handleMenu}>
                      All Validators
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rewards-calculator" onClick={handleMenu}>
                      Rewards Calculator
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="https://mumbai.polygonscan.com/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleMenu}
                    >
                      Mumbai Explorer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wiki.polygon.technology/docs/delegate/staking-faq/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleMenu}
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.polygon.technology/support/home"
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleMenu}
                    >
                      Support
                    </a>
                  </li>
                </Box>
              </Container>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default Header;
