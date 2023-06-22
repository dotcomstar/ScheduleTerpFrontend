import { Button, Stack } from "@mui/material";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CourseSelectorForm from "./CourseSelectorForm";
import { SearchResult } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import useCoursesStore from "../courses/store";

export type FormValues = {
  courses: SearchResult[];
};

const CourseGeneratorForm = () => {
  const navigate = useNavigate();
  const { courses, setCourse, addCourse, removeCourse, resetCourses } =
    useCoursesStore();
  const { handleSubmit, control, register } = useForm<FormValues>({
    defaultValues: {
      courses: courses,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "courses", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    if (data.courses.length === 0) {
      resetCourses();
    } else {
      data.courses
        .filter((course) => course.type === "course")
        .map((course, index) => setCourse(course, index));
    }
    console.log("data: ", data);
    navigate("/schedules");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {fields.map((field, index) => (
          <CourseSelectorForm
            key={field.id}
            formId={field.id}
            formIndex={index}
            control={control}
            register={register}
          />
        ))}

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            width: { xs: "80%", sm: "60%" },
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              const emptyCourse = {
                name: "",
                slug: "",
                type: "professor",
              } as SearchResult;
              append(emptyCourse);
              addCourse(emptyCourse);
              console.log("Appending");
            }}
            sx={{
              width: "100%",
            }}
          >
            + Add class
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              remove(fields.length - 1);
              removeCourse(fields.length - 1);
              console.log("Removing");
              console.log("fields: ", fields);
            }}
            sx={{
              width: "100%",
            }}
          >
            - Remove class
          </Button>
        </Stack>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{
            width: { xs: "80%", sm: "60%" },
          }}
        >
          GENERATE
        </Button>
      </Stack>
    </form>
  );
};

export default CourseGeneratorForm;
