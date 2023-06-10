import { Grid } from "@mui/material";
import CourseGeneratorForm from "./components/CourseGeneratorForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <CourseGeneratorForm onSearch={(s) => console.log(s)} />
        <CourseGeneratorForm onSearch={(s) => console.log(s)} />
        <CourseGeneratorForm onSearch={(s) => console.log(s)} />
        <CourseGeneratorForm onSearch={(s) => console.log(s)} />
      </Grid>
    </Grid>
  );
}

export default App;
