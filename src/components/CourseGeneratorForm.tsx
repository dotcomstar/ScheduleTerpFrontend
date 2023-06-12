import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import useSearch, { SearchResult } from "../hooks/useSearch";
import CourseDetails from "./CourseDetails";

const CourseGeneratorForm = () => {
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
          label={"Course 1"}
          variant="outlined"
          key={1}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {<span style={{ color: "gray" }}>{"TODO: Put info here"}</span>}
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

export default CourseGeneratorForm;
