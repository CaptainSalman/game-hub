import { Button, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import { useColorMode } from "./components/ui/color-mode";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const {toggleColorMode} = useColorMode();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
        <Button variant="outline" onClick={toggleColorMode} mt={4} colorScheme="teal" size="sm">
          toggleColorMode
        </Button>
      </GridItem>
      {showAside && (
        <GridItem area={"aside"} bg="lightgray">
          aside
        </GridItem>
      )}
      <GridItem area={"main"} bg="yellow">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
