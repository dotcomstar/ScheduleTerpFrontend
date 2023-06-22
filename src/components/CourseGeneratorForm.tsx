import { Button, Stack } from "@mui/material";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import CourseSelector from "./CourseSelector";
import { SearchResult } from "../hooks/useSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type FormValues = {
  courses: SearchResult[];
};

const CourseGeneratorForm = () => {
  const navigate = useNavigate();
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
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "courses", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<FormValues> = (d: FormValues) => {
    setData(
      d.courses
        .filter((course) => course.type === "course")
        .map((course) => course)
    );
    navigate("/schedules");
  };

  const [data, setData] = useState<SearchResult[]>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
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
              append({ name: "", slug: "", type: "professor" });
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
              console.log("Removing");
              console.log(fields);
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
        <p>{data?.map((d) => d.name + ", ")}</p>
      </Stack>
    </form>
  );
};

export default CourseGeneratorForm;
