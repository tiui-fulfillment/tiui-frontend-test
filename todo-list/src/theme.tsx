import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#658147",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#658147",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#658147",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#658147",
            },
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#658147",
          borderColor: "#658147",
          "&.Mui-selected": {
            backgroundColor: "#658147",
            color: "#fff",
          },
          "&:hover": {
            backgroundColor: "rgba(101, 129, 71, 0.2)",
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderColor: "#658147",
        },
      },
    },
  },
});
