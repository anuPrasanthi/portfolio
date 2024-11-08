import React, { createContext, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themes } from "./Themes";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ theme, children }) => {
  const muiTheme = createTheme(themes[theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
