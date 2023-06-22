import { Typography } from "@mui/material";
import CourseGeneratorForm from "../components/CourseGeneratorForm";
import CenteredComponents from "../components/CenteredComponents";

const HomePage = () => {
  return (
    <>
      <CenteredComponents>
        <Typography variant="h2">ScheduleTerp</Typography>
        <Typography variant="subtitle1">Generate a UMD schedule</Typography>
        <CourseGeneratorForm />
      </CenteredComponents>
    </>
  );
};

export default HomePage;
