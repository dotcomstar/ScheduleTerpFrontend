import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CourseSelector from "./CourseSelector";
import { SearchResult } from "../hooks/useSearch";

export type FormValues = {
  course1: SearchResult;
  course2?: SearchResult;
  course3?: SearchResult;
  course4?: SearchResult;
  course5?: SearchResult;
};

const CourseGeneratorForm = () => {
  const [courseIds, setCourseIds] = useState([1, 2, 3, 4]);
  const [data, setData] = useState<string[]>([]);
  const { handleSubmit, control } = useForm<FormValues>();
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
          variant="text"
          color="inherit"
          onClick={() => setCourseIds([...courseIds, courseIds.length + 1])}
          sx={{
            width: { xs: "80%", sm: "60%" },
            px: { xs: "10%", sm: "20%" },
          }}
        >
          + Add class
        </Button>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{
            width: { xs: "80%", sm: "60%" },
            px: { xs: "10%", sm: "20%" },
          }}
        >
          GENERATE
        </Button>
      </Stack>
    </form>
  );
};

export default CourseGeneratorForm;
