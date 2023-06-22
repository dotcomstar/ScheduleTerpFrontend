import useCoursesStore from "../courses/store";

const SchedulesPage = () => {
  const courses = useCoursesStore((s) => s.courses);
  return (
    <div>
      {courses.map((c, i) => (
        <p key={i}>{c.name}</p>
      ))}
    </div>
  );
};

export default SchedulesPage;
