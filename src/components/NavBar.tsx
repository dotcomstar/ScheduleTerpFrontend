import { AccountCircle } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import useAuthStore from "../auth/store";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useAuthStore();
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
        {user.user ? (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            onClick={() => navigate("/profile")}
            sx={{ gap: 1 }}
          >
            <AccountCircle />
            <Typography aria-label="User">{user.user}</Typography>
          </IconButton>
        ) : (
          <Button
            variant="text"
            aria-label="Login / Register"
            onClick={() => navigate("/login")}
          >
            Login / Register
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default NavBar;
