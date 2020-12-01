import React, { useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment"
import styles from "../styles/stylesCalendar.css";

import Heading from "./Heading";
import MonthPicker from "./MonthPicker";
import DaysHeading from "./DaysHeading";
import DatesOfMonth from "./DatesOfMonth";

const Calendar: React.FC = () => {
  const [currentDate] = useState(moment());

  const [dateObject, setDateObject] = useState({
    year: +currentDate.year(),
    month: +currentDate.month(),
    dates: +currentDate.daysInMonth()
  });

  type changeMonthParameter = "next" | "previous";
  const changeMonthHandler = (selection: changeMonthParameter) => {
    let selectedYear = dateObject.year;
    let selectedMonth = dateObject.month;

    if (selection === "next") {
      if (selectedMonth + 1 === 12) {
        selectedYear++;
        selectedMonth = 0;
      } else {
        selectedMonth++;
      }
    }

    if (selection === "previous") {
      if (selectedMonth - 1 >= 0) {
        selectedMonth--;
      } else {
        selectedYear--;
        selectedMonth = 11;
      }
    }

    const selectedDates = +moment(`${selectedYear}-${selectedMonth + 1}`, "YYYY-MM").daysInMonth();

    setDateObject({
      year: selectedYear,
      month: selectedMonth,
      dates: selectedDates
    });

  };

  return (
    <div className={styles.calendarContainer}>
      <Heading />
      <MonthPicker month={dateObject.month} year={dateObject.year} changeMonthHandler={changeMonthHandler} />
      <table id='calendar-table' className={styles.calendarTableContainer}>
        <DaysHeading />
        <DatesOfMonth
          year={dateObject.year}
          month={dateObject.month}
          daysOfMonth={dateObject.dates}
        />
      </table>
    </div>
  );
};

ReactDOM.render(<Calendar />, document.getElementById("root"));

export default Calendar;
