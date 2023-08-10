const convertToMilitaryTime = (time: string) => {
  const [hours, minutes] = time.split(":");
  const hoursNum = Number(hours);
  let amHours = hours;
  if (hoursNum < 10) {
    amHours = "0" + amHours;
  }
  const pmHours = hoursNum == 12 ? hoursNum : hoursNum + 12;

  if (time.endsWith("am")) time = amHours + ":" + minutes;
  else if (time.endsWith("pm")) time = pmHours.toString() + ":" + minutes;
  return time.substring(0, time.length - 2);
};

const getDates = (base: Date, start: string, end: string) => {
  start = convertToMilitaryTime(start);
  end = convertToMilitaryTime(end);
  return {
    startDate: new Date(base.toISOString().split("T")[0] + "T" + start),
    endDate: new Date(base.toISOString().split("T")[0] + "T" + end),
  };
};

const parseSectionTimeRe = new RegExp(
  /^((?:M|(?:Tu)|W|(?:Th)|F)+) (?:(\d+:\d+(?:am|pm)))-(?:(\d+:\d+(?:am|pm)))$/m
);
const parseDays = new RegExp(/(M|(?:Tu)|W|(?:Th)|F)/);

const daysOfWeek: { [day in string]: Date } = {
  M: new Date("2023-08-28"),
  Tu: new Date("2023-08-29"),
  W: new Date("2023-08-30"),
  Th: new Date("2023-08-31"),
  F: new Date("2023-09-01"),
};

const getAppointments = (
  sectionTimes: string,
  title: string,
  sectionNum: string,
  type: string
) => {
  const parsed = sectionTimes.match(parseSectionTimeRe);
  if (!parsed) return null;
  const [_, daysClumped, start, end] = parsed.map((s) => s);
  const days = daysClumped.split(parseDays) || [];

  return days
    .filter((c) => c !== "")
    .map((c) => ({
      ...getDates(daysOfWeek[c], start, end),
      title: title,
      type: type,
      location: sectionNum,
    }));
};

export default getAppointments;
