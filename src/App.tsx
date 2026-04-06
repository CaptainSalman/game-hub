import { Button, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const {toggleColorMode} = useColorMode();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      {showAside && (
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      )}
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
