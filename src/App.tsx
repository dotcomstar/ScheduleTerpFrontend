import {
  Box,
  CssBaseline,
  Grid,
  PaletteMode,
  Stack,
  ThemeProvider,
  capitalize,
  createTheme,
} from "@mui/material";
import NavBar from "./components/NavBar";
import { useMediaQuery } from "@mui/material";
import React from "react";
import CourseGeneratorForm from "./components/CourseGeneratorForm";
import "./index.css";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(
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
          h1: {
            padding: 0,
            margin: 0,
          },
          button: {
            textTransform: "none",
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={-3.4}
              sx={{ pb: 3 }}
            >
              <h1>ScheduleTerps</h1>
              <i>Generate a UMD schedule</i>
            </Stack>
            <CourseGeneratorForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
