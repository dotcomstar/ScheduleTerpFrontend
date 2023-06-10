import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "@emotion/styled";
import { useState } from "react";
import Select, { SelectRenderer } from "react-dropdown-select";
import { Stack } from "@mui/material";

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

  const onSearch = ({
    props,
    state,
    methods,
  }: SelectRenderer<SearchResult>) => {
    setInputValue(methods.safeString(state.search));
    return methods.sortBy(); //.filter((option) => option.type !== "course");
  };

  const StyledItem = styled.div`
    padding: 10px;
    color: #555;
    border-radius: 3px;
    margin: 3px;
    cursor: pointer;
    > div {
      display: flex;
      align-items: center;
    }

    input {
      margin-right: 10px;
    }

    :hover {
      background: #f2f2f2;
    }
  `;

  return (
    <Select
      options={options.data || []}
      labelField="name"
      valueField="slug"
      onChange={(v: SearchResult[]) => {
        console.log(v);
      }}
      searchFn={onSearch}
      itemRenderer={({ item, methods }) => (
        <StyledItem>
          <div onClick={() => methods.addItem(item)}>
            <Stack direction="row">
              {item.name + " "}
              {item.type === "course" && (
                <CourseDetails courseName={item.name} />
              )}
            </Stack>
          </div>
        </StyledItem>
      )}
    />
  );
};

export default CourseGeneratorForm;
