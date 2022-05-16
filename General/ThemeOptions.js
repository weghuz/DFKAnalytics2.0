import { createTheme } from "@mui/material";

const themeDark = {
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#5596f3",
    // },
    secondary: {
      main: "#aaa",
    },
    text: {
      primary: "#eeeeee",
    },
    background: {
      default: '#202020',
      paper: '#2d2d2d',
    },
    // success: {
    //   main: '#4ead52',
    // },
  },
};

const themeLight = {
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#3f51b5',
    // },
    secondary: {
      main: '#777',
    },
    background: {
      default: '#ececec',
      paper: '#e2e2e2',
    },
    text: {
      primary: '#212121',
    },
  },
}

export default {light: createTheme(themeLight), dark: createTheme(themeDark) };
