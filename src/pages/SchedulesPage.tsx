import { Grid, Paper, styled } from "@mui/material";
import useCoursesStore from "../courses/store";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SchedulesPage = () => {
  const courses = useCoursesStore((s) => s.courses);
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {courses.map(
        (c, i) =>
          c.name !== "" && (
            <Grid item xs={6}>
              <Item key={i}>{c.name}</Item>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default SchedulesPage;
