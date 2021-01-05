import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import styles from "../styles/stylesDatePicker.css";

import CalendarIcon from "../components/CalendarIcon";
import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";
import { keyDownHandler } from "../utility/functions";

interface ICalendarProps {
  applicationMode?: boolean;
  datePickerFormValue: string;
  setDatePickerFormValue: (value: string) => void;
}

interface IClickedDate {
  year?: number;
  month?: number;
  date?: number;
} 

interface IDateObject {
  year: number;
  month: number;
  dates: number;
}

const Calendar: React.FC<ICalendarProps> = (props) => {
  const { datePickerFormValue, setDatePickerFormValue } = props
  const applicationMode = props.applicationMode ? true : false;
  const [showCalendar, setShowCalendar] = useState(false);
  const [clickedDate, setClickedDate] = useState<IClickedDate>({});
  const [dateObject, setDateObject] = useState<IDateObject>({
    year: +moment().year(),
    month: +moment().month(),
    dates: +moment().daysInMonth(),
  });

  useEffect(() => {
    setClickedDate({
      ...clickedDate,
      year: +dateObject.year,
      month: +dateObject.month + 1
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateObject]);

  useEffect(() => {
    const dateInputValueHandler = () => {
      if (clickedDate.date) {
        const selectedFormDateValue = moment(`${clickedDate.year}-${clickedDate.month}-${clickedDate.date}`, "YYYY-MM-DD").format('MM/DD/YYYY');

        setDatePickerFormValue(selectedFormDateValue);
      }
    };

    dateInputValueHandler();
    console.log("clicked date is:", clickedDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedDate]);

  const showCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setDatePickerFormValue(targetValue);

    if (targetValue.length === 10) {
      const month = targetValue.charAt(0) + targetValue.charAt(1);
      const date = targetValue.charAt(3) + targetValue.charAt(4);
      const year = targetValue.charAt(6) + targetValue.charAt(7) + targetValue.charAt(8) + targetValue.charAt(9);

      setClickedDate({
        date: +date,
        year: +year,
        month: +month
      })
      console.log("clicked date is:", clickedDate);
    }

  };

  const onKeyDown = useCallback((event) => { keyDownHandler(event, dateObject.dates) }, [dateObject.dates]);
  const applicationKeyHandler = (applicationMode: boolean) => {
    if (applicationMode) {
      window.addEventListener('keydown', onKeyDown);
    }
    else {
      window.removeEventListener('keydown', onKeyDown)
    }
  };

  console.log("the clicked", clickedDate);
  return (
    <>
      <div>
        <button className={styles.iconButton} aria-label="click for calendar" type="button" onClick={showCalendarHandler}><CalendarIcon /></button>
        <input className={styles.inputField} id="date-picker-input" type="text" aria-label="date input" placeholder='MM/DD/YYYY' autoComplete="off" value={datePickerFormValue} onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className={showCalendar ? styles.calendarContainer : styles.hidden} {...(applicationMode ? { role: "application" } : {})}>
        <MonthPicker
          currentDate={dateObject}
          clickedDate={clickedDate}
          setDateObject={setDateObject} />
        <table id='calendar-table' className={styles.calendarTableContainer} role="presentation" onKeyDown={() => applicationKeyHandler(applicationMode)} >
          <DaysHeading />
          <DatesOfMonth
            applicationMode={applicationMode}
            year={dateObject.year}
            month={dateObject.month}
            datesOfMonth={dateObject.dates}
            setClickedDate={setClickedDate}
            showCalendarHandler={showCalendarHandler}
          />
        </table>
      </div>
    </>
  );

};

export default Calendar;