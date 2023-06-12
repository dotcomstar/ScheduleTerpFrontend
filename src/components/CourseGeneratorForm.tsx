import { Box } from "@mui/material";
import CourseSelector from "./CourseSelector";

const CourseGeneratorForm = () => {
  const courseIds = [1, 2, 3, 4];
  return (
    <>
      {courseIds.map((id) => {
        <Box py={0.5}>
          <CourseSelector formId={id} />
        </Box>;
      })}
    </>
  );
};

export default CourseGeneratorForm;
