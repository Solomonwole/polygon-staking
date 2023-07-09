import React, { useContext, useEffect } from "react";
import appContext from "../../context/AppContext";
import PreloadPage from "../../components/preloader/PreloadPage";
import {
  Box,
  Stack,
  Typography,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AllValidators from "./component/AllValidators";

const overview = [
  { title: "Total Validators", text: "100" },
  {
    title: "Total Stake",
    text: "3,594,340,797 MATIC",
    subtext: "$2,460,797,134.39",
  },
  {
    title: "Total Rewards Distributed",
    text: "783,553,476 MATIC",
    subtext: "$536,444,999.59",
  },
  {
    title: "Bor Block Height",
    text: "44,864,849",
  },
  {
    title: "Heimdall Block Height",
    text: "14,696,529",
  },
  {
    title: "Last Checkpoint",
    text: "48,112",
    subtext: "2 hours ago",
  },
  {
    title: "Checkpoint Interval",
    text: "48 Minutes",
  },
  {
    title: "Performance Benchmark",
    text: "95",
  },
];
function Homepage() {
  const { onLoad, setOnLoad } = useContext(appContext);

  useEffect(() => {
    const hidePreloader = setTimeout(() => {
      setOnLoad(false);
    }, 7000);

    return () => {
      clearTimeout(hidePreloader);
    };
  }, [setOnLoad]);
  return (
    <div>
      {onLoad ? (
        <PreloadPage />
      ) : (
        <Box>
          <Box
            sx={{
              height: { xs: "326px", sm: "527px" },
              width: "100%",
              background: "#7B3FE4",
            }}
          >
            <Container maxWidth="lg">
              <Stack
                direction={{ sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  sx={{
                    marginTop: { xs: "50px", sm: "0px" },
                    marginBottom: { xs: "50px", sm: "0px" },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      textAlign: { xs: "center", sm: "start" },
                    }}
                  >
                    Start earning rewards with{" "}
                    <span
                      style={{
                        color: "#F8943A",
                      }}
                    >
                      Polygon
                    </span>{" "}
                    Staking.
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "#7b3fe4",
                      margin: "0 auto",
                      marginTop: "25px",
                      width: { xs: "100%", sm: "168px" },
                    }}
                  >
                    Become a Delegator
                  </Button>
                </Box>

                <Box display={{ xs: "none", sm: "flex" }}>
                  <img
                    src="https://staking.polygon.technology/assets/img/staking-banner.svg"
                    alt=""
                    style={{
                      width: "431px",
                    }}
                  />
                </Box>
              </Stack>
            </Container>
          </Box>

          <Container maxWidth="lg">
            <Box
              sx={{
                borderRadius: "10px",
                boxShadow:
                  "0px 12px 8px 0px rgba(0, 0, 0, 0.02), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
                width: "100%",
                minHeight: "400px",

                marginTop: "-40px",
                background: "#fff",
              }}
            >
              <Box sx={{ padding: "20px" }}>
                <Typography>Overview</Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr 1fr",
                  },
                }}
              >
                {overview.map((item, index) => (
                  <Box
                    key={item.title}
                    sx={{
                      borderRight: {
                        xs: "none",
                        sm: "1px solid #e5e5e5",
                      },
                      borderTop: {
                        xs: "1px solid #e5e5e5",
                      },
                      padding: "16px",
                      borderBottom:
                        index === overview.length - 1
                          ? "none"
                          : "1px solid #e5e5e5",
                    }}
                  >
                    <OverviewBox
                      title={item.title}
                      text={item.text}
                      subtext={item.subtext}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>

          {/* All Validators  */}
          <Container>
            <AllValidators />
          </Container>
        </Box>
      )}
    </div>
  );
}

export default Homepage;

function OverviewBox({ title, text, subtext }) {
  return (
    <Box
      sx={{
        height: "172px",
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1" color="#B0B4BB">
            {title}
          </Typography>
          <AiOutlineInfoCircle color="#B0B4BB" />
        </Stack>
        <Typography color="#0A0B0D" sx={{ fontWeight: 700, fontSize: "16px" }}>
          {text}
        </Typography>
        <Typography color="#52555D" sx={{ fontSize: "14px" }}>
          {subtext}
        </Typography>
      </Stack>
    </Box>
  );
}
