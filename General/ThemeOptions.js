import { createTheme } from "@mui/material";

const themeDark = {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a{
          color: #90caf9;
        }
        .common {
          border-bottom: 2px solid rgba(128, 128, 148, 1);
        }
        .commonBg {
          background-color: rgba(128, 128, 148, 1);
        }
        .uncommon {
          border: 1px solid #66bb6a;
        }
        .uncommonBg {
          background-color: #66bb6a;
        }
        .rare {
          border: 1px solid #90caf9;
        }
        .rareBg {
          background-color: #90caf9;
        }
        .legendary {
          border: 1px solid #ff9a02;
        }
        .legendaryBg {
          background-color: #ff9a02;
        }
        .mythic {
          border: 1px solid #b942e2;
        }
        .mythicBg {
          background-color: #b942e2;
        }
        .react-dropdown-select-dropdown.react-dropdown-select-dropdown-position-bottom{
          background-color:#2d2d2d;
        }
        .react-dropdown-select-input{
          color:#eeeeee;
        }
      `,
    },
  },
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
      default: "#202020",
      paper: "#2d2d2d",
    },
    info: {
      main: "#b942e2",
    },
    success: {
      main: "#66bb6a",
    },
  },
};

const themeLight = {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a{
          color: #1976d2;
        }
        .common {
          border: 1px solid rgba(100, 100, 120, 1);
        }
        .uncommon {
          border: 1px solid #2e7d32;
        }
        .rare {
          border: 1px solid #1976d2;
        }
        .legendary {
          border: 1px solid #ff9a02;
        }
        .mythic {
          border: 1px solid #b942e2;
        }
        .react-dropdown-select-dropdown.react-dropdown-select-dropdown-position-bottom{
          background-color:#e2e2e2;
        }
        .react-dropdown-select-input{
          color:#212121;
        }
      `,
    },
  },
  palette: {
    mode: "light",
    // primary: {
    //   main: '#3f51b5',
    // },
    secondary: {
      main: "#777",
    },
    background: {
      default: "#ececec",
      paper: "#e2e2e2",
    },
    text: {
      primary: "#212121",
    },
    info: {
      main: "#b942e2",
    },
  },
};

export default { light: createTheme(themeLight), dark: createTheme(themeDark) };
