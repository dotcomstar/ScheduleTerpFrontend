import useCourse from "../hooks/useCourse";

const CourseDetails = ({ courseName }: { courseName: string }) => {
  const course = useCourse(courseName);
  return (
    <span style={{ color: "gray" }}>
      {course?.data?.title ? " - " + course?.data?.title : ""}
    </span>
  );
};

export default CourseDetails;
