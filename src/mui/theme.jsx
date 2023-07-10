import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b3fe4",
    },
    secondary: {
      main: "#3BBEAE",
    },
    textPrimary: {
      main: "#000",
    },
    textSecondary: {
      main: "#B0B4BB",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1296,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Manrope",
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      color: "#fff",
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "18px",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    h3: {
      fontSize: "30px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 800,
    },
    h5: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    body1: {
      fontSize: "15px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          height: "42px",
          fontWeight: 400,
        },
        contained: {
          // Style the contained button style
          backgroundColor: "#7B3FE4",
          color: "#fff",
        },
        outlined: {
          // Style the outlined button style
          borderColor: "linear-gradient(180deg, #8A46FF 0%, #6E38CC 100%)",
          color: "#8A46FF",
        },
      },
    },
  },
});
export default theme;
