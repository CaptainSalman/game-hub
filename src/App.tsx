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
      </GridItem>
      {showAside && (
        <GridItem area={"aside"}>
          aside
        </GridItem>
      )}
      <GridItem area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
