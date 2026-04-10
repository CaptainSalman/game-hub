import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { HiX } from "react-icons/hi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette={"green"}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.ThumbIndicator />
          </Switch.Thumb>
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text whiteSpace={"nowrap"}>{colorMode} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
