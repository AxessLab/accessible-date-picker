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

  const keyDownHandler = (event: React.KeyboardEvent) => {
    const eventTarget = event.target as HTMLElement
    const currentElementId = eventTarget.id.slice(-2) as string;

    const sliceChecker = (elementId: string): number => {
      if (elementId[0] === "-") {
        return +elementId.slice(-1)
      } else {
        return +elementId
      }
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      if ((document.getElementById(`button-${sliceChecker(currentElementId) - 1}`) as HTMLButtonElement) === null) {
        return;
      } else {
        (document.getElementById(`button-${sliceChecker(currentElementId) - 1}`) as HTMLButtonElement).focus();
      }
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if ((document.getElementById(`button-${sliceChecker(currentElementId) + 1}`) as HTMLButtonElement) === null) {
        return;
      } else {
        (document.getElementById(`button-${sliceChecker(currentElementId) + 1}`) as HTMLButtonElement).focus();
      }
    }

  };

  return (
    <div className={styles.calendarContainer} role="application">
      <MonthPicker
        month={dateObject.month}
        year={dateObject.year}
        setDateObject={setDateObject} />
      <table id='calendar-table' className={styles.calendarTableContainer} role="presentation" onKeyDown={keyDownHandler}>
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
