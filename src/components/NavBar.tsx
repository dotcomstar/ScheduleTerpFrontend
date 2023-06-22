import { Stack, Button, Box } from "@mui/material";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
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
          onClick={() => navigate("/")}
        />
        <Button
          variant="text"
          aria-label="About"
          onClick={() => navigate("/about")}
        >
          About
        </Button>
      </Stack>
      <Stack direction="row">
        <ColorModeSwitch />
        <Button
          variant="text"
          aria-label="Login / Register"
          onClick={() => navigate("/login")}
        >
          Login / Register
        </Button>
      </Stack>
    </Stack>
  );
};

export default NavBar;
