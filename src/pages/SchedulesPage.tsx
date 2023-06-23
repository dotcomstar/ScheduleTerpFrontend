import { Grid, Paper, styled } from "@mui/material";
import useCoursesStore from "../courses/store";
import {
  AppointmentModel,
  ViewState,
  SchedulerDateTime,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import React from "react";

const appointments: Array<AppointmentModel> = [
  {
    startDate: "2018-10-31T10:00",
    endDate: "2018-10-31T11:15",
    title: "Meeting",
    type: "private",
  },
  {
    startDate: "2018-10-31T07:30",
    endDate: "2018-10-31T09:00",
    title: "Go to a gym",
    type: "work",
  },
];
const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "private", text: "Private", color: "#EC407A" },
      { id: "work", text: "Work", color: "#7E57C2" },
    ],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SchedulesPage = () => {
  const courses = useCoursesStore((s) => s.courses);
  if (
    courses.length === 0 ||
    courses.reduce((acc, c) => acc && c.name === "", true)
  ) {
    return <p>No courses selected!</p>;
  }
  const [currentDate, setCurrentDate] =
    React.useState<SchedulerDateTime>("2018-10-31");

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {courses.map(
        (c, i) =>
          c.name !== "" && (
            <Grid item xs={6}>
              <Paper>
                <Scheduler data={appointments}>
                  <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                  />
                  <WeekView startDayHour={7} endDayHour={12} />

                  <Appointments />
                  <Resources data={resources} />
                </Scheduler>
              </Paper>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default SchedulesPage;
