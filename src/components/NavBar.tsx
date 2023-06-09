import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Button variant="link" color="white">
          About
        </Button>
      </HStack>
      <Flex>
        <ColorModeSwitch />
        <Button variant="link" color="white">
          Login / Register
        </Button>
      </Flex>
    </HStack>
  );
};

export default NavBar;
