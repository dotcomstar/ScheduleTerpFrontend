import { Stack, Button, Box } from "@mui/material";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const buttonStyles = {
  color: "white",
  fontSize: "lg",
};

const NavBar = () => {
  return (
    <Stack direction="row" padding="10px" justifyContent="space-between">
      <Stack direction="row">
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Schedule Terp's logo"
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
