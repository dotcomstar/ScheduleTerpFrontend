import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

interface SearchResult {
  name: string;
  slug: string;
  type: string; // "course" | "professor";
}

interface CourseResult {
  department: string;
  course_number: string;
  title: string;
  description: string;
  credits: number;
  average_gpa: number;
  professors: string[];
}

const CourseDetails = ({ courseName }: { courseName: string }) => {
  const courseDetails = useQuery<CourseResult, Error>({
    queryKey: ["query", courseName],
    queryFn: () =>
      axios
        .get<CourseResult>("https://planetterp.com/api/v1/course", {
          params: {
            name: courseName,
          },
        })
        .then((res) => res.data),
    enabled: !!courseName,
    staleTime: Infinity,
  });
  return (
    <span style={{ color: "gray" }}>
      {courseDetails?.data?.title ? " - " + courseDetails?.data?.title : ""}
    </span>
  );
};

const CourseGeneratorForm = () => {
  const [inputValue, setInputValue] = useState("");
  const options = useQuery<SearchResult[], Error>({
    queryKey: ["query", inputValue],
    queryFn: () =>
      axios
        .get<SearchResult[]>("https://planetterp.com/api/v1/search", {
          params: {
            limit: 5,
            query: inputValue,
          },
        })
        .then((res) =>
          (res.data || []).filter(({ type }) => type === "course")
        ),
    // only fetch search terms longer than 2 characters
    enabled: inputValue.length > 2,
    staleTime: 10 * 1000,
  });

  return (
    <Autocomplete
      onInputChange={(_, value) => {
        setInputValue(value);
      }}
      options={options.data || []}
      autoSelect={true}
      filterOptions={(options) => options}
      autoHighlight={true}
      getOptionLabel={(option) => option.name}
      // getOptionSelected={(option, value) => option.name === value.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Course "}
          variant="outlined"
          key={1}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {<span style={{ color: "gray" }}>Todo: Put info here</span>}
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
