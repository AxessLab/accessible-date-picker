import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import moment from "moment";
import styles from "../styles/stylesCalendar.css";

import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";
import { keyDownHandler } from "../utility/functions";

interface CalendarProps {
  applicationMode: boolean;
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const { applicationMode } = props
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
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateObject]);

  return (
    <div className={styles.calendarContainer} role="application">
      <MonthPicker
        month={dateObject.month}
        year={dateObject.year}
        setDateObject={setDateObject} />
      <table id='calendar-table' className={styles.calendarTableContainer} role="presentation" onKeyDown={(event) => keyDownHandler(event, dateObject.dates)}>
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

//ReactDOM.render(<Calendar applicationMode={true} />, document.getElementById("root"));
export default Calendar;