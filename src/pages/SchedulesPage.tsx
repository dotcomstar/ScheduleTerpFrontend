import { Box, Grid, LinearProgress, Paper } from "@mui/material";
import useCoursesStore from "../courses/store";
// @ts-ignore
import { ViewState, SchedulerDateTime } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Resources,
  // @ts-ignore
} from "@devexpress/dx-react-scheduler-material-ui";

import React from "react";
import getAppointments from "../courses/getAppointments";
import CustomAppointmentTooltip from "../components/CustomAppointmentTooltip";
import useSchedules from "../hooks/useSchedules";

// const firstDate = new Date("2023-08-29T08:00");
// const ThanksgivingDates = {
//   startDate: new Date("2023-11-23T00:00"),
//   endDate: new Date("2023-11-27T23:59"),
// };

const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "1", text: "Course 1", color: "#5ba300" },
      { id: "2", text: "Course 2", color: "#8507a9" },
      { id: "3", text: "Course 3", color: "#0073e6" },
      { id: "4", text: "Course 4", color: "#e6308a" },
      { id: "5", text: "Course 5", color: "#E49B0F" },
      { id: "6", text: "Course 6", color: "#b51963" },
    ],
  },
];

const SchedulesPage = () => {
  const course_names = useCoursesStore((s) =>
    s.courses.map((c) => c.name)
  ).filter((name) => name !== "");

  // Render an erorr message if there are no courses selected
  if (course_names.length === 0) {
    return <p>No courses selected!</p>;
  }

  const { data, isLoading, error } = useSchedules(course_names.join(","));
  const allSchedules = data || [[]];
  if (error) throw error;

  // TODO: Refactor this
  const courses = allSchedules.map((schedule) =>
    schedule.map((course) =>
      typeof course.lectures === "string"
        ? getAppointments(
            course.lectures,
            course.class_name + " - " + course.section_num,
            "Section " + course.section_num,
            resources[0].instances[
              course_names.findIndex((name) => name === course.class_name) %
                resources[0].instances.length
            ].id
          )
        : course.lectures
            .map((lectureTime) =>
              getAppointments(
                lectureTime,
                course.class_name + " - " + course.section_num,
                "Section " + course.section_num,
                resources[0].instances[
                  course_names.findIndex((name) => name === course.class_name) %
                    resources[0].instances.length
                ].id
              )
            )
            .filter((e) => e !== null)
            .flat()
    )
  );

  const weekends = [0, 6];

  const [currentDate, setCurrentDate] =
    React.useState<SchedulerDateTime>("2023-08-29");

  return isLoading ? (
    <Box sx={{ margin: 2 }}>
      <p>Generating schedules...</p>
      <LinearProgress color="secondary" />
    </Box>
  ) : (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 0, md: 1 }}>
      {courses.map(
        (schedule, i) =>
          i < 20 && (
            <Grid item xs={6} key={i}>
              <Paper sx={{ marginX: { xs: 1, sm: 2, md: 3 }, border: 1 }}>
                <Scheduler data={schedule.flat()}>
                  <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                  />
                  <WeekView
                    name={i.toString()}
                    startDayHour={8}
                    endDayHour={22}
                    excludedDays={weekends}
                    // timeTableCellComponent={(props: any) => (
                    //   <WeekView.TimeTableCell
                    //     {...props}
                    //     style={{ height: "4vh" }}
                    //   />
                    // )}
                    // timeScaleLabelComponent={(props: any) => (
                    //   <WeekView.TimeScaleLabel
                    //     {...props}
                    //     style={{ height: "4vh" }}
                    //   />
                    // )}
                    // timeScaleTickCellComponent={(props: any) => (
                    //   <WeekView.TimeScaleTickCell
                    //     {...props}
                    //     style={{ height: "4vh" }}
                    //   />
                    // )}
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
