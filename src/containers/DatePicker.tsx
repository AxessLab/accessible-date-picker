import React, { useCallback, useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import moment from "moment";
import styles from "../styles/stylesDatePicker.css";

import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";
import { keyDownHandler } from "../utility/functions";

interface CalendarProps {
  applicationMode?: boolean;
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const applicationMode = props.applicationMode ? true : false;
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

  console.log("Selected date is: ", clickedDate);

  const onKeyDown = useCallback((event) => { keyDownHandler(event, dateObject.dates) }, [dateObject.dates])
  const applicationKeyHandler = (applicationMode: boolean) => {
    if (applicationMode) {
      window.addEventListener('keydown', onKeyDown);
    }
    else {
      window.removeEventListener('keydown', onKeyDown)
    }
  };

  return (
    <div className={styles.calendarContainer} {...(applicationMode ? { role: "application" } : {})}>
      <MonthPicker
        month={dateObject.month}
        year={dateObject.year}
        setDateObject={setDateObject} />
      <table id='calendar-table' className={styles.calendarTableContainer} role="presentation" onKeyDown={() => applicationKeyHandler(applicationMode)} >
        <DaysHeading />
        <DatesOfMonth
          year={dateObject.year}
          month={dateObject.month}
          datesOfMonth={dateObject.dates}
          setClickedDate={setClickedDate}
          applicationMode={applicationMode}
        />
      </table>
    </div>
  );

};

//ReactDOM.render(<Calendar applicationMode={true} />, document.getElementById("root"));
export default Calendar;