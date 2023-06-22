import { Stack, Typography } from "@mui/material";
import CourseGeneratorForm from "../components/CourseGeneratorForm";

const HomePage = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ pb: 3 }}
      >
        <Typography variant="h2">ScheduleTerp</Typography>
        <Typography variant="subtitle1">Generate a UMD schedule</Typography>
      </Stack>
      <CourseGeneratorForm />
    </>
  );
};

export default HomePage;
