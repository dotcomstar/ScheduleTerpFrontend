import { useQuery } from "@tanstack/react-query";
import schedulesClient from "../services/schedules-client";

export interface Schedule {
  class_name: string;
  section_num: string;
  gpa: number;
  lectures: string | string[];
}

const useSchedules = (inputValue: string) =>
  useQuery<Schedule[][], Error>({
    queryKey: ["schedules", inputValue.toUpperCase()],
    queryFn: () =>
      schedulesClient
        .get<Schedule[][]>("/", {
          params: {
            courses: inputValue.toUpperCase(),
          },
        })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    staleTime: 10 * 1000, // 10s
  });

export default useSchedules;
