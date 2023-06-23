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

const getDates = (base: Date, start: string, end: string) => {
  return {
    startDate: new Date(base.toISOString().split("T")[0] + "T" + start),
    endDate: new Date(base.toISOString().split("T")[0] + "T" + end),
  };
};

const parseSectionTimeRe = new RegExp(
  /^((?:M|(?:Tu)|W|(?:Th)|F)+) (?:(\d+:\d+)(?:am|pm)+)-(?:(\d+:\d+)(?:am|pm)+)$/m
);

const SectionTimeString = "MWF 10:00am-10:50am";
const parsed = SectionTimeString.match(parseSectionTimeRe) || [];
const [_, days, start, end] = parsed.map((s) => s);
console.log(parsed);

const firstDate = new Date("2023-08-29T08:00");
const startDate = new Date(firstDate.toISOString().split("T")[0] + "T" + start);
const endDate = new Date(firstDate.toISOString().split("T")[0] + "T" + end);
console.log(startDate);
console.log(endDate);
const ThanksgivingDates = {
  startDate: new Date("2023-11-23T00:00"),
  endDate: new Date("2023-11-27T23:59"),
};

const class1 = {
  startDate: new Date("2023-08-30T09:00"),
  endDate: new Date("2023-08-30T09:59"),
};

const class3 = {
  ...getDates(firstDate, start, end),
  title: "3 Test",
  type: "holiday",
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
  },
  { ...class1, title: "Test class 2", type: "work" },
  { ...class3 },
  { ...ThanksgivingDates, title: "Thanksgiving", type: "holiday" },
];
const resources = [
  {
    fieldName: "type",
    title: "Type",
    instances: [
      { id: "private", text: "Private", color: "#EC407A" },
      { id: "work", text: "Work", color: "#7E57C2" },
      { id: "holiday", text: "Holiday", color: "blue" },
    ],
  },
];

const SchedulesPage = () => {
  const courses = useCoursesStore((s) => s.courses);
  // Render an erorr message if there are no courses selected
  // if (
  //   courses.length === 0 ||
  //   courses.reduce((acc, c) => acc && c.name === "", true)
  // ) {
  //   return <p>No courses selected!</p>;
  // }

  const [currentDate, setCurrentDate] =
    React.useState<SchedulerDateTime>("2023-08-29");

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* {courses.map(
        (c, i) =>
          c.name !== "" && ( */}
      <Grid item xs={12} key={1}>
        <Paper>
          <Scheduler data={appointments}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={setCurrentDate}
            />
            <WeekView startDayHour={7} endDayHour={12} name="Testing" />

            <Appointments />
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      </Grid>
      {/* )
      )} */}
    </Grid>
  );
};

export default SchedulesPage;
