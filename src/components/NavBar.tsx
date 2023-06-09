import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const buttonStyles = {
  color: "white",
  size: "lg",
};

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <HStack>
        <Image borderRadius="15px" src={logo} boxSize="60px" />
        <Button
          variant="link"
          {...buttonStyles}
          onClick={() => alert("TODO: Create About page")}
        >
          About
        </Button>
      </HStack>
      <HStack>
        <ColorModeSwitch />
        <Button
          variant="link"
          {...buttonStyles}
          onClick={() => alert("TODO: Handle logins")}
        >
          Login / Register
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
