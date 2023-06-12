import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import useSearch, { SearchResult } from "../hooks/useSearch";
import CourseDetails from "./CourseDetails";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "./CourseGeneratorForm";
import { useDebounce } from "use-debounce";

interface Props {
  formId: number;
  control: Control<FormValues, any>;
}

const CourseSelector = ({ formId, control }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 200);
  const options = useSearch(debouncedValue);

  return (
    <>
      <Autocomplete
        sx={{
          width: "100%",
          px: { xs: "10%", sm: "20%" },
        }}
        onInputChange={(_, value) => {
          setInputValue(value);
        }}
        options={options?.data || []}
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
            label={"Course " + formId.toString()}
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
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.name, inputValue, { insideWords: true });
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
    </>
  );
};

export default CourseSelector;
