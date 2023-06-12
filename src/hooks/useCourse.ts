import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";

export interface CourseResult {
  department: string;
  course_number: string;
  title: string;
  description: string;
  credits: number;
  average_gpa: number;
  professors: string[];
}

const useCourse = (courseName: string) =>
  useQuery<CourseResult, Error>({
    queryKey: ["name", courseName],
    queryFn: () =>
      apiClient
        .get<CourseResult>("/course", {
          params: {
            name: courseName,
          },
        })
        .then((res) => res.data),
    enabled: !!courseName,
    staleTime: Infinity,
  });

export default useCourse;
