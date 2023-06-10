import { Stack, Button, Box } from "@mui/material";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      padding="10px"
      justifyContent="space-between"
      bgcolor="#ff5c6d" // TODO: Extract this to a variable
    >
      <Stack direction="row">
        <Box
          component="img"
          sx={{
            width: 60,
            height: 60,
            borderRadius: 2.6,
          }}
          alt="ScheduleTerp's logo"
          src={logo}
        />
        <Button
          variant="text"
          aria-label="About"
          onClick={() => alert("TODO: Create About page")}
        >
          About
        </Button>
      </Stack>
      <Stack direction="row">
        <ColorModeSwitch />
        <Button
          variant="text"
          aria-label="Login / Register"
          onClick={() => alert("TODO: Handle logins")}
        >
          Login / Register
        </Button>
      </Stack>
    </Stack>
  );
};

export default NavBar;
