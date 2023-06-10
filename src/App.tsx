import { Grid, GridItem, VStack } from "@chakra-ui/react";
import CourseGeneratorForm from "./components/CourseGeneratorForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"` }}>
      <GridItem area="nav" bg="brand.red">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <VStack my={2}>
          <CourseGeneratorForm onSearch={(s) => console.log(s)} />
          <CourseGeneratorForm onSearch={(s) => console.log(s)} />
          <CourseGeneratorForm onSearch={(s) => console.log(s)} />
          <CourseGeneratorForm onSearch={(s) => console.log(s)} />
        </VStack>
      </GridItem>
    </Grid>
  );
}

export default App;
