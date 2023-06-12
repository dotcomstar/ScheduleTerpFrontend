import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CourseSelector from "./CourseSelector";

export type FormValues = {
  course1: string;
  course2?: string;
  course3?: string;
  course4?: string;
  course5?: string;
};

const CourseGeneratorForm = () => {
  const courseIds = [1, 2, 3, 4];
  const [data, setData] = useState<string[]>([]);
  const { handleSubmit, register, reset, control } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
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
          type="submit"
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
