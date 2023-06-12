import { Button, Stack } from "@mui/material";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CourseSelector from "./CourseSelector";
import { SearchResult } from "../hooks/useSearch";
import { useState } from "react";

export type FormValues = {
  courses: SearchResult[];
};

const CourseGeneratorForm = () => {
  const { handleSubmit, control, register } = useForm<FormValues>({
    defaultValues: {
      courses: [
        {
          name: "",
          slug: "",
          type: "professor",
        },
        {
          name: "",
          slug: "",
          type: "professor",
        },
        {
          name: "",
          slug: "",
          type: "professor",
        },
        {
          name: "",
          slug: "",
          type: "professor",
        },
      ],
    },
  });
  const { fields, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "courses", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<FormValues> = (d: FormValues) => {
    setData(
      d.courses
        .filter((course) => course.type === "course")
        .map((course) => course)
    );
  };

  const [data, setData] = useState<SearchResult[]>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {fields.map((field, index) => (
          <CourseSelector
            key={field.id}
            formId={field.id}
            formIndex={index}
            control={control}
            register={register}
          />
        ))}

        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            append({ name: "", slug: "", type: "professor" });
            console.log("Appending");
          }}
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
        <p>{data?.map((d) => d.name + ", ")}</p>
      </Stack>
    </form>
  );
};

export default CourseGeneratorForm;
