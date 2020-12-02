import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment"
import styles from "../styles/stylesCalendar.css";

import Heading from "../components/Heading";
import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";

const Calendar: React.FC = () => {
  const [currentDate] = useState(moment());

  const [dateObject, setDateObject] = useState({
    year: +currentDate.year(),
    month: +currentDate.month(),
    dates: +currentDate.daysInMonth()
  });

  const [clickedDate, setClickedDate] = useState({});

  useEffect(() => {
    setClickedDate({
      ...clickedDate,
      year: dateObject.year,
      month: dateObject.month + 1
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateObject]);

  console.log("Selected date is: ", clickedDate);

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
      <MonthPicker
        month={dateObject.month}
        year={dateObject.year}
        changeMonthHandler={changeMonthHandler} />
      <table id='calendar-table' className={styles.calendarTableContainer}>
        <DaysHeading />
        <DatesOfMonth
          year={dateObject.year}
          month={dateObject.month}
          datesOfMonth={dateObject.dates}
          setClickedDate={setClickedDate}
        />
      </table>
    </div>
  );
};

ReactDOM.render(<Calendar />, document.getElementById("root"));

export default Calendar;
