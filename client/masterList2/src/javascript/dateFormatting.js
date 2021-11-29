//find month name
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//returns month name based off months array (monthNum is traditional numbering ie. Nov = 11)
function findMonthName(monthNum) {
  return months[monthNum - 1];
}

//returns day of the week name based of weekDays array (weekdayNum is traditional numbering ie. mon = 1)
function findDayOfWeekday(weekdayNum) {
  return weekDays[weekdayNum];
}

//returns next week day name based off old name
function nextDayOfWeek(prevDayName) {
  prevDayName = prevDayName.charAt(0).toUpperCase() + prevDayName.slice(1);
  let locater = weekDays.indexOf(prevDayName);
  if (weekDays[locater + 1] == null) {
    return weekDays[0];
  } else {
    return weekDays[locater + 1];
  }
}

//returns previous day of the week based of a given weekday name
function prevDayOfWeek(dayName) {
  dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  let locater = weekDays.indexOf(dayName);
  if (weekDays[locater - 1] == null) {
    return weekDays[6];
  } else {
    return weekDays[locater - 1];
  }
}

//return month and year together for header on calendar
function printHeaderDate(monthNum, year) {
  return findMonthName(monthNum) + " " + year;
}

function findFirstOfMonth(weekDay, dayNum) {
  let startOfMonth = weekDay;

  while (dayNum > 1) {
    startOfMonth = prevDayOfWeek(startOfMonth);
    --dayNum;
  }

  return startOfMonth;
}

export {
  findMonthName,
  nextDayOfWeek,
  printHeaderDate,
  findDayOfWeekday,
  findFirstOfMonth,
};
