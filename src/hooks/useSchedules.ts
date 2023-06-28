import schedules from "../data/schedules";

export interface Schedule {
  class_name: string;
  section_num: string;
  gpa: number;
  lectures: string;
}

const useSchedules = () => ({ data: schedules, isLoading: false, error: null });

export default useSchedules;
