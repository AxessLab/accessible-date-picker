import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import styles from "../styles/stylesCalendar.css";

import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";

const Calendar: React.FC = () => {
  const [clickedDate, setClickedDate] = useState({});
  const [dateObject, setDateObject] = useState({
    year: +moment().year(),
    month: +moment().month(),
    dates: +moment().daysInMonth(),
  });

  useEffect(() => {
    setClickedDate({
      ...clickedDate,
      year: dateObject.year,
      month: dateObject.month + 1
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateObject]);

  console.log("Selected date is: ", clickedDate);

  return (
    <div className={styles.calendarContainer}>
      <MonthPicker
        month={dateObject.month}
        year={dateObject.year}
        setDateObject={setDateObject} />
      <table id='calendar-table' className={styles.calendarTableContainer} role="presentation">
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
