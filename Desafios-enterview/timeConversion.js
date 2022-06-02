/*
  Given a time in-hour AM/PM format, convert it to military (24-hour) time.
  Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
*/

function timeConversion(s) {
  const time = s.split(":");

  let hour;

  if (/[Pp]/.test(time[2]) && time[0] !== "12") {
    parseInt(time[0]);
    hour = 12;
    for (let i = 0; i < time[0]; i++) {
      hour++;
    }
    time[0] = hour;
  }

  if (/[Aa]/.test(time[2]) && time[0] === "12") time[0] = "00";

  const convertedTime = time.join().replace(/[A-Za-z]/g, "");

  return console.log(convertedTime.replace(/([,])/g, ":"));
}

timeConversion("07:05:45PM");
timeConversion("07:05:45AM");
timeConversion("12:45:54PM");
timeConversion("12:45:54AM");
