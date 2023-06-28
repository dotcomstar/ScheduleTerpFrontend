import { Grid, Paper } from "@mui/material";
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
import getAppointments from "../courses/getAppointments";
import CustomAppointmentTooltip from "../components/CustomAppointmentTooltip";
import useSchedules from "../hooks/useSchedules";

const sectionTimes = {
  enes100: ["TuTh 2:00pm-3:15pm", "ENES100"] as const,
  math100: ["MWF 10:00am-10:50am", "MATH100"] as const,
};
const course1 = getAppointments(...sectionTimes.enes100, "CSIC200", "work");
const course2 = getAppointments(...sectionTimes.math100, "CSIC200", "private");

const firstDate = new Date("2023-08-29T08:00");
const ThanksgivingDates = {
  startDate: new Date("2023-11-23T00:00"),
  endDate: new Date("2023-11-27T23:59"),
};

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
  {
    startDate: firstDate,
    endDate: "2023-08-29T10:00",
    title: "Test class",
    type: "work",
    location: "What",
  },
  ...course1,
  ...course2,
];

const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "private", text: "Private", color: "#5ba300" },
      { id: "work", text: "Work", color: "#8507a9" },
      { id: "3", text: "3", color: "#0073e6" },
      { id: "4", text: "4", color: "#e6308a" },
      { id: "4", text: "4", color: "#b51963" },
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
        course.class_name,
        course.section_num,
        resources[0].instances[i % resources[0].instances.length].id
      )
    )
  );

  const [currentDate, setCurrentDate] =
    React.useState<SchedulerDateTime>("2023-08-29");

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {courses.map(
        (schedule, i) =>
          i < 20 && (
            <Grid item xs={4} key={i}>
              <Paper>
                <Scheduler data={schedule.flat()}>
                  <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                  />
                  <WeekView startDayHour={8} endDayHour={22} name="Testing" />

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
