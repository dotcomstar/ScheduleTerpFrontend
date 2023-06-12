import {
  CssBaseline,
  Grid,
  PaletteMode,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CourseGeneratorForm from "./components/CourseGeneratorForm";
import NavBar from "./components/NavBar";
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
              sx={{ pb: 3 }}
            >
              <Typography variant="h2">ScheduleTerp</Typography>
              <Typography variant="subtitle1">
                Generate a UMD schedule
              </Typography>
            </Stack>
            <CourseGeneratorForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
