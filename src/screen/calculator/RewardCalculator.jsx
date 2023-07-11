import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  Slider,
} from "@mui/material";
import React, { useState } from "react";

function RewardCalculator() {
  const [matic, setMatic] = useState(10000);
  const [sliderNumber, setSliderNumber] = useState(10);
  const [days, setDays] = useState(365);
  console.log(days);

  // Calculate Absolute Rewards
  
  const absoluteRewards = ((matic * sliderNumber) / 0.34).toFixed(2);

  // Calculate reward frequency in minutes
  const rewardFrequencyInMinutes = ((24 * 60) / days).toFixed();

  // Calculate Network Share
  const networkShare = ((matic / absoluteRewards) * 100).toFixed();

  // Calculate Absolute Rewards percentage
  const absoluteRewardsPercentage = ((absoluteRewards / matic) * 100).toFixed(1);

   // Calculate Current Reward Percentage (CRP)
   const currentRewardPercentage = (absoluteRewardsPercentage * sliderNumber) / 100;



  return (
    <Box sx={{ width: "100%", overflowX: "hidden", paddingBottom: "30px" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            boxShadow:
              "0px 12px 8px 0px rgba(0, 0, 0, 0.02), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
            borderRadius: "10px",
            marginTop: "25px",
            marginBottom: "30px",
            borderBottom: "1px solid #DDDFE0",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              borderBottom: "1px solid #DDDFE0",
            }}
          >
            <Typography variant="h2">
              Calculate Your Delegation Rewards with MATIC Staking
            </Typography>
          </Box>

          {/* Grid  */}
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              width={{ xs: "100%", md: "60%" }}
              sx={{
                borderRight: { md: "1px solid #DDDFE0" },
                padding: "20px",
              }}
            >
              <Typography variant="body1" mb={2}>
                How much MATIC will you delegate?
              </Typography>

              <TextField
                value={matic}
                onChange={(e) => setMatic(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">MATIC</InputAdornment>
                  ),
                }}
              />

              <Stack direction={{ md: "row" }} spacing={5}>
                <Typography variant="body2" color="#000" mt={10}>
                  Drag Slider below to increase MATIC tokens staked %
                </Typography>

                <Stack>
                  <Typography variant="body2" color="#B0B4BB" mt={10}>
                  Current MATIC tokens staked %: 3.9939%
                  </Typography>
                  <Typography variant="body2" color="#B0B4BB" mt={1}>
                  Projected MATIC tokens staked: 2,723,474,651.52
                  </Typography>
                </Stack>
              </Stack>

              <Box mt={5} mb={5}>
                <Slider
                  defaultValue={sliderNumber}
                  getAriaValueText={(value) => {
                    String(value);
                    setSliderNumber(value);
                  }}
                  color="secondary"
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box>
                <Typography variant="body1" mb={2}>
                  How many days do you want to delegate MATIC for?
                </Typography>

                <TextField
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">DAYS</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* right  */}
            <Box mt={4} width={{ xs: "100%", md: "40%" }}>
              <Stack
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "1px solid #DDDFE0",
                  paddingBottom: "20px",
                }}
              >
                <img
                  src="https://staking.polygon.technology/assets/img/matic-token.svg"
                  alt=""
                  style={{
                    width: "56px",
                    height: "56px",
                  }}
                />
                <Typography variant="h1" color="#000" align="center">
                  {absoluteRewards}
                </Typography>
                <Typography variant="caption">
                  Absolute Rewards (for 365 days)
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                }}
              >
                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #DDDFE0",
                    borderRight: { sm: "1px solid #DDDFE0" },
                    paddingBottom: "20px",
                    paddingTop: "20px",
                  }}
                >
                  <img
                    src="https://staking.polygon.technology/assets/img/trophy-circle.svg"
                    alt=""
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                  <Typography variant="h2" color="#000" align="center">
                    ~{currentRewardPercentage}%
                  </Typography>
                  <Typography variant="caption">Absolute Rewards %</Typography>
                </Stack>

                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #DDDFE0",
                    borderRight: { sm: "1px solid #DDDFE0" },
                    paddingBottom: "20px",
                    paddingTop: "20px",
                  }}
                >
                  <img
                    src="https://staking.polygon.technology/assets/img/trophy-circle.svg"
                    alt=""
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                  <Typography variant="h2" color="#000" align="center">
                    ~{absoluteRewardsPercentage}%
                  </Typography>
                  <Typography variant="caption">
                    Current Reward Percentage % (CRP)
                  </Typography>
                </Stack>

                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid #DDDFE0",
                    borderRight: { sm: "1px solid #DDDFE0" },
                    paddingBottom: "20px",
                    paddingTop: "20px",
                  }}
                >
                  <img
                    src="https://staking.polygon.technology/assets/img/purple-clock.svg"
                    alt=""
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                  <Typography variant="h2" color="#000" align="center">
                    ~{rewardFrequencyInMinutes} Mins
                  </Typography>
                  <Typography variant="caption">Rewards frequency</Typography>
                </Stack>

                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: { sm: "1px solid #DDDFE0" },
                    borderRight: { sm: "1px solid #DDDFE0" },
                    paddingBottom: "20px",
                    paddingTop: "20px",
                  }}
                >
                  <img
                    src="https://staking.polygon.technology/assets/img/purple-clock.svg"
                    alt=""
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                  <Typography variant="h2" color="#000" align="center">
                    {networkShare}%
                  </Typography>
                  <Typography variant="caption">Your Network Share</Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "88px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="body1" color="#000">
                  Circulating supply = 9,726,695,184 MATIC tokens
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Stack direction="row" spacing={1}>
            <img
              src="https://staking.polygon.technology/assets/img/edit-circle.svg"
              alt=""
            />
            <Typography color="primary" sx={{ fontWeight: 700 }}>
              Important Note:
            </Typography>
          </Stack>

          <Typography variant="body1" paragraph mt={4}>
            All rewards figures given here are indicative. Actual rewards earned
            will depend on the actual total locked supply in the network at each
            checkpoint. This is expected to vary significantly as more MATIC
            tokens get locked in the staking contracts.
          </Typography>
          <Typography variant="body1" paragraph mt={4}>
            Please refer to this article for more details on the staking
            economics. Broadly speaking, the target locked supply is ~30% of the
            MATIC token circulating supply.
          </Typography>
          <Typography variant="body1" paragraph mt={4}>
            Rewards will be higher to begin with, and will keep decreasing as
            the locked supply % goes up. This change in locked supply is
            captured at every checkpoint, and rewards are calculated based on
            this. The presented results are based on prediction formulae and we
            cannot guarantee any kind of accuracy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default RewardCalculator;
