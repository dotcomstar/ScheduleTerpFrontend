import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"` }}>
      <GridItem area="nav" bg="#ff5c6d">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
