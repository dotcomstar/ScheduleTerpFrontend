import { Box } from "@mui/material";
import CourseSelector from "./CourseSelector";

const CourseGeneratorForm = () => {
  const courseIds = [1, 2, 3, 4];
  return (
    <>
      {courseIds.map((courseId) => (
        <Box py={0.5} key={courseId}>
          <CourseSelector formId={courseId} />
        </Box>
      ))}
    </>
  );
};

export default CourseGeneratorForm;
