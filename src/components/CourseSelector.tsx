import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import useSearch, { SearchResult } from "../hooks/useSearch";
import CourseDetails from "./CourseDetails";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { FormValues } from "./CourseGeneratorForm";
import { useDebounce } from "use-debounce";

interface Props {
  formIndex: number;
  formId: string;
  control: Control<FormValues, any>;
  register: UseFormRegister<FormValues>;
}

const CourseSelector = ({ formIndex, formId, control, register }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<SearchResult | null>({
    name: "",
    slug: "",
    type: "course",
  });
  const [debouncedInputValue] = useDebounce(inputValue, 200);
  const options = useSearch(debouncedInputValue);

  return (
    <Controller
      control={control}
      name={`courses.${formIndex}`}
      render={() => (
        <Autocomplete
          sx={{
            width: "100%",
            px: { xs: "10%", sm: "20%" },
          }}
          onInputChange={(_, value) => {
            setInputValue(value);
          }}
          options={options?.data || []}
          onChange={(e, value, reason) => {
            setValue(value);
            console.log("Setting value: ", value);
          }}
          value={value}
          autoSelect={true}
          filterOptions={(o: SearchResult[]) => o}
          autoHighlight={true}
          disableListWrap={true}
          getOptionLabel={(option: SearchResult) => option.name}
          // getOptionSelected={(option, value) => option.name === value.name}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label={"Course " + (formIndex + 1).toString()}
              variant="outlined"
              key={formId}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {/* <CourseDetails courseName={selectedCourse} /> */}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
              type="text"
              {...register(`courses.${formIndex}`)}
            />
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.name, inputValue, {
              insideWords: true,
            });
            const parts = parse(option.name, matches);

            return (
              <li {...props} key={option.name}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                  {option.type === "course" && (
                    <CourseDetails courseName={option.name} />
                  )}
                </div>
              </li>
            );
          }}
        />
      )}
    />
  );
};

export default CourseSelector;
