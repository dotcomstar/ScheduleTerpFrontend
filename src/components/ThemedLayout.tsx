import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import "../index.css";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

interface Props {
  children: ReactNode;
}

const ThemedLayout = ({ children }: Props) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const setModeAndStore = (mode: "light" | "dark") => {
    setMode(mode);
    localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    // First check if the user has already set a theme preference.
    // If not, check if the user already has a specified theme from
    // their browser.
    // Defaults to light mode.
    const existingPreference = localStorage.getItem("theme");
    if (existingPreference) {
      existingPreference === "light" ? setMode("light") : setMode("dark");
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setModeAndStore("dark");
      } else {
        setModeAndStore("light");
      }
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        if (mode === "light") {
          setMode("dark");
          localStorage.setItem("theme", "dark");
        } else {
          setMode("light");
          localStorage.setItem("theme", "light");
        }
      },
    }),
    [mode]
  );

  // Update the theme only if the mode changes
  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === "dark" ? "dark" : "light",
          primary: {
            light: "#ff5c6d",
            main: "#fff",
            dark: "#ff5c6d",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff5c6d",
            main: "#ff5c6d",
            dark: "#ff5c6d",
            contrastText: "#000",
          },
        },
        typography: {
          h2: {
            padding: 0,
            margin: 0,
            fontWeight: 450,
          },
          subtitle1: {
            fontStyle: "italic",
          },
          button: {
            textTransform: "none",
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default ThemedLayout;
