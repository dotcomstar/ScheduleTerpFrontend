import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CourseSelector from "./CourseSelector";

const CourseGeneratorForm = () => {
  const courseIds = [1, 2, 3, 4];
  const [data, setData] = useState<string[]>([]);
  const { handleSubmit, register, reset, control } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="form">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {courseIds.map((courseId) => (
          <CourseSelector key={courseId} formId={courseId} control={control} />
        ))}

        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: { xs: "80%", sm: "60%" },
            px: { xs: "10%", sm: "20%" },
          }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default CourseGeneratorForm;
