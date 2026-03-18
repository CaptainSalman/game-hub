import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/Navbar";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
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
