import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment"
import styles from "../styles/stylesCalendar.css";

import Heading from "./Heading";
import MonthPicker from "./MonthPicker"
import DatesOfMonth from "./DatesOfMonth";
import DaysHeading from "./DaysHeading";


const Calendar: React.FC = () => {
  const [currentDate] = useState(moment());
  const [dateObject] = useState({
    year: currentDate.year(),
    month: currentDate.month(),
    date: currentDate.date()
  });

  // const nextMonthHandler = () => {};

  // const previousMonthHandler = () => {};

  useEffect(() => {
    console.log(currentDate);
    console.log(dateObject)
  }), [];

  return (
    <div className={styles.calendarContainer}>
      <Heading />
      {/* This is where the input is going */}
      <MonthPicker month={dateObject.month} year={dateObject.year} />
      <table id='calendar-table' className={styles.calendarTableContainer}>
        <DaysHeading />
        <DatesOfMonth year={dateObject.year} month={dateObject.month} daysOfMonth={dateObject.date} />
      </table>
    </div>
  );
};

ReactDOM.render(<Calendar />, document.getElementById("root"));

export default Calendar;
