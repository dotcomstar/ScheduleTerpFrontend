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
        <Image src={logo} boxSize="60px" />
        <Button variant="link" {...buttonStyles}>
          About
        </Button>
      </HStack>
      <HStack>
        <ColorModeSwitch />
        <Button variant="link" {...buttonStyles}>
          Login / Register
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
