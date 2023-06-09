import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      red: "#ff5c6d",
      tan: "#fff0cf",
      blue: "#6daed4",
      orange: "#ffb400",
      gray: "#6c7e88",
      50: "#ffe2e6",
      100: "#ffb1b9",
      200: "#ff7f8d",
      300: "#ff5c6d",
      400: "#fe1d32",
      500: "#e50519",
      600: "#b30013",
      700: "#81000c",
      800: "#4f0006",
      900: "#200001",
    },
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;
