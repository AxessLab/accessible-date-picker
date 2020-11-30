import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment"
import styles from "./styles/stylesCalendar.css";

import Heading from "./components/Heading";
import DaysOfMonth from "./components/DaysOfMonth";
import TableHeading from "./components/TableHeading";


const Calendar: React.FC = () => {
  const [currentDate] = useState(moment());
  const [dateObject] = useState({
    year: currentDate.year(),
    month: currentDate.month(),
    date: currentDate.date()
  });

  useEffect(() => {
    console.log(currentDate);
    console.log(dateObject)
  }), [];


  return (
    <>
      <Heading />
      {/* This is where the input is going */}
      <table id='calendar-table' className={styles.calendarContainer}>
        <TableHeading />
        <tbody role='presentation'>
          <DaysOfMonth year={dateObject.year} month={dateObject.month} daysOfMonth={dateObject.date} />
        </tbody>
      </table>
    </>
  );
};

ReactDOM.render(<Calendar />, document.getElementById("root"));

export default Calendar;
