import React from "react";
import ReactDOM from "react-dom/client";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";
import "./index.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const theme = useTheme();
export const colorMode = React.useContext(ColorModeContext);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
