import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
// import ms from "ms";

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
    queryKey: ["name", courseName.toLowerCase()],
    queryFn: () =>
      apiClient
        .get<CourseResult>("/course", {
          params: {
            name: courseName,
          },
        })
        .then((res) => res.data),
    enabled: !!courseName,
    refetchOnWindowFocus: false,
    staleTime: 2 * 7 * 24 * 60 * 60 * 1000, // 2w
  });

export default useCourse;
