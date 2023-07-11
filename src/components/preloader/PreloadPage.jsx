import { Box, Typography } from "@mui/material";
import React from "react";
import Preloader from "./Preloader";

function PreloadPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box mb={4}>
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            d="M10.8477 12.9969L10.9405 12.9581L12.4948 12.0286L14.0982 11.0714C14.1838 11.0235 14.2612 10.9618 14.3273 10.8888C14.4445 10.7619 14.5206 10.6017 14.5455 10.4296C14.5455 10.3521 14.5455 6.55654 14.5455 6.47354C14.5158 6.28273 14.4303 6.10536 14.3 5.9645C14.1781 5.84761 14.0403 5.74887 13.891 5.67126L10.9732 3.93945C10.8507 3.88305 10.7177 3.85387 10.5832 3.85387C10.4487 3.85387 10.3158 3.88305 10.1933 3.93945C10.1442 3.93945 9.81151 4.15523 9.07524 4.59233L7.28636 5.6602L5.51931 6.71145C4.97392 7.0545 4.46671 7.34221 4.42854 7.35328C4.30526 7.41678 4.16866 7.44904 4.03041 7.44733C3.8935 7.44766 3.75797 7.41941 3.63228 7.36434C3.57228 7.36434 1.94157 6.37394 1.85431 6.30754C1.76892 6.24166 1.69357 6.16337 1.6307 6.07517C1.56091 5.96714 1.51102 5.84715 1.48345 5.72105C1.46396 5.35246 1.46396 4.98306 1.48345 4.61447C1.43958 4.18493 1.45242 3.75139 1.52163 3.3253C1.55747 3.22127 1.607 3.12263 1.66888 3.03206C1.73078 2.94619 1.80635 2.87138 1.89249 2.81072C1.95794 2.76646 3.52865 1.82034 3.57773 1.78161C3.70431 1.72251 3.84198 1.69191 3.98131 1.69191C4.12065 1.69191 4.25834 1.72251 4.38491 1.78161C4.43945 1.80927 6.02107 2.75539 6.14106 2.82732C6.2566 2.90686 6.35191 3.01304 6.41919 3.13717C6.46299 3.21325 6.49605 3.2952 6.51738 3.38062V3.46362V4.15524C6.51738 4.53701 6.51738 4.85238 6.51738 4.85238L7.24273 4.42635L7.95719 4.00032V3.3087C7.95719 2.53962 7.95719 2.56727 7.9081 2.41235C7.84181 2.22613 7.7245 2.06299 7.56997 1.94207C7.51543 1.90334 4.54852 0.132794 4.40672 0.0553327L4.29219 0H4.24311H3.69772L3.61592 0.0331963C3.55592 0.060861 3.13597 0.304316 1.97976 0.9904C1.1235 1.49943 0.403587 1.93099 0.376318 1.95313C0.277896 2.02268 0.193985 2.11127 0.129406 2.21382C0.0648269 2.31636 0.02085 2.43084 0 2.55068C0 2.62814 0 2.68901 0 4.58127C0 6.47354 0 6.53994 0 6.61187C0.0209728 6.73472 0.0674488 6.85165 0.136347 6.95491C0.207378 7.05825 0.293862 7.14971 0.392679 7.22601C0.463579 7.27028 3.49048 9.07955 3.56683 9.11829C3.69738 9.18047 3.83982 9.21269 3.98404 9.21269C4.12827 9.21269 4.27072 9.18047 4.40127 9.11829L5.49205 8.45986C6.38103 7.90657 6.65916 7.75718 7.25363 7.41967C7.8481 7.08216 8.01173 6.9881 9.0207 6.36288L10.1115 5.68232C10.3401 5.57594 10.601 5.566 10.8368 5.65466C10.875 5.66442 10.9117 5.6793 10.9459 5.69892C11.0114 5.73212 12.653 6.75018 12.7021 6.80551C12.8884 6.9554 13.0129 7.17047 13.0511 7.40859C13.0511 7.50819 13.0511 9.57199 13.0511 9.67158C13.0124 9.91661 12.8814 10.1368 12.6857 10.2857C12.6312 10.3245 11.0495 11.2872 10.9241 11.3425C10.7997 11.3988 10.6649 11.4279 10.5287 11.4279C10.3924 11.4279 10.2577 11.3988 10.1333 11.3425C10.0896 11.3425 9.77332 11.1323 9.23339 10.7892L8.35532 10.2359C8.1988 10.1146 8.08115 9.94908 8.01719 9.76009C7.97356 9.62177 7.97354 9.66051 7.96809 8.88589V8.17768L7.25363 8.60371L6.53918 9.02976V9.74349C6.53918 10.5181 6.53918 10.5126 6.57736 10.6454C6.60835 10.7425 6.65438 10.834 6.71371 10.9165C6.77513 11.0009 6.84866 11.0755 6.93186 11.1378C6.98094 11.1765 9.99693 12.9913 10.0678 13.0301C10.1387 13.0688 10.1769 13.0909 10.4769 13.0909H10.7441L10.8477 12.9969Z"
            fill="#854CE6"
          ></path>
        </svg>
      </Box>
      <Preloader />
      <Typography
        variant="body1"
        sx={{ color: "#B0B4BB", fontWeight: 800 }}
        mt={4}
      >
        Powered by Polygon
      </Typography>
    </Box>
  );
}

export default PreloadPage;
