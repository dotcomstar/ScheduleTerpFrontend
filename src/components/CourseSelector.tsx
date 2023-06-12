import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import useSearch, { SearchResult } from "../hooks/useSearch";
import CourseDetails from "./CourseDetails";

interface Props {
  formId: number;
}

const CourseSelector = ({ formId }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const options = useSearch(inputValue);

  return (
    <Autocomplete
      onInputChange={(_, value) => {
        setInputValue(value);
      }}
      options={options?.data || []}
      autoSelect={true}
      filterOptions={(o: SearchResult[]) => o}
      autoHighlight={true}
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
                <CourseDetails
                  courseName={params.inputProps.value?.toString() || ""}
                />
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
  );
};

export default CourseSelector;
