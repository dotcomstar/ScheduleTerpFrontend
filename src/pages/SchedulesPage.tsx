import { Grid, Paper } from "@mui/material";
import useCoursesStore from "../courses/store";
import { ViewState, SchedulerDateTime } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";

import React from "react";
import getAppointments from "../courses/getAppointments";
import CustomAppointmentTooltip from "../components/CustomAppointmentTooltip";
import useSchedules from "../hooks/useSchedules";

const firstDate = new Date("2023-08-29T08:00");
const ThanksgivingDates = {
  startDate: new Date("2023-11-23T00:00"),
  endDate: new Date("2023-11-27T23:59"),
};

const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "1", text: "Course 1", color: "#5ba300" },
      { id: "2", text: "Course 2", color: "#8507a9" },
      { id: "3", text: "Course 3", color: "#0073e6" },
      { id: "4", text: "Course 4", color: "#e6308a" },
      { id: "5", text: "Course 5", color: "#b51963" },
    ],
  },
];

const SchedulesPage = () => {
  // const courses = useCoursesStore((s) => s.courses);
  // Render an erorr message if there are no courses selected
  // if (
  //   courses.length === 0 ||
  //   courses.reduce((acc, c) => acc && c.name === "", true)
  // ) {
  //   return <p>No courses selected!</p>;
  // }

  const allSchedules = useSchedules();

  const courses = allSchedules.data.map((schedule) =>
    schedule.map((course, i) =>
      getAppointments(
        course.lectures,
        course.class_name + " - " + course.section_num,
        "Section " + course.section_num,
        resources[0].instances[i % resources[0].instances.length].id
      )
    )
  );

  const [currentDate, setCurrentDate] =
    React.useState<SchedulerDateTime>("2023-08-29");

  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 0, md: 1 }}>
      {courses.map(
        (schedule, i) =>
          i < 20 && (
            <Grid item xs={6} key={i}>
              <Paper sx={{ marginX: { xs: 1, sm: 2, md: 3 }, border: 1 }}>
                <Scheduler data={schedule.flat()} height="10%">
                  <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                  />
                  <WeekView
                    name={i.toString()}
                    startDayHour={8}
                    endDayHour={22}
                    excludedDays={[0, 6]}
                  />

                  <Appointments />
                  <CustomAppointmentTooltip />
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
