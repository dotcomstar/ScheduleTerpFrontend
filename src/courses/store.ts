import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { SearchResult } from "../hooks/useSearch";

interface CoursesStore {
  courses: SearchResult[];
  removeCourse: (index: number) => void;
  addCourse: (course: SearchResult) => void;
  setCourse: (course: SearchResult, index: number) => void;
  resetCourses: () => void;
}

const defaultCourses: SearchResult[] = [
  {
    name: "",
    slug: "",
    type: "professor",
  },
  {
    name: "",
    slug: "",
    type: "professor",
  },
  {
    name: "",
    slug: "",
    type: "professor",
  },
  {
    name: "",
    slug: "",
    type: "professor",
  },
];

const useCoursesStore = create<CoursesStore>((set) => ({
  addCourse: (course) =>
    set((store) => ({ courses: [...store.courses, course] })),
  removeCourse: (index) =>
    set((store) => ({
      courses: store.courses.filter((_, i) => i === index),
    })),
  setCourse: (course, index) =>
    set((store) => ({
      courses: store.courses.map((c, i) => (index === i ? course : c)),
    })),
  resetCourses: () =>
    set(() => ({
      courses: defaultCourses,
    })),
  courses: defaultCourses,
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Courses Store", useCoursesStore);

export default useCoursesStore;
