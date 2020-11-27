import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles/stylesCalendar.css";

import Heading from "./components/Heading";
import DaysOfMonth from "./components/DaysOfMonth";
import TableHeading from "./components/TableHeading";

const Calendar: React.FC = () => {

  return (
    <>
      <Heading />
      {/* This is where the input is going */}
      <table id='calendar-table' className={styles.calendarContainer}>
        <TableHeading />
        <tbody role='presentation'>
          <DaysOfMonth year={2020} month={12} daysOfMonth={31} />
        </tbody>
      </table>
    </>
  );
};

ReactDOM.render(<Calendar />, document.getElementById("root"));

export default Calendar;
