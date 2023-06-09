import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CourseGeneratorForm from "./components/CourseGeneratorForm";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"` }}>
      <GridItem area="nav" bg="brand.red">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="brand.tan">
        <CourseGeneratorForm />
      </GridItem>
    </Grid>
  );
}

export default App;
