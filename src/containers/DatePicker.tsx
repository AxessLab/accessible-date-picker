import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import styles from "../styles/stylesDatePicker.css";

import CalendarIcon from "../components/CalendarIcon";
import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";
import { keyDownHandler } from "../utility/functions";

interface CalendarProps {
  applicationMode?: boolean;
  datePickerFormValue: string;
  setDatePickerFormValue: (value: string) => void;
}

interface ClickedDate {
  year?: number | null;
  month?: number | null;
  date?: number | null
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const { datePickerFormValue, setDatePickerFormValue } = props
  const applicationMode = props.applicationMode ? true : false;
  const [showCalendar, setShowCalendar] = useState(false);
  const [clickedDate, setClickedDate] = useState<ClickedDate>({});
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

  useEffect(() => {
    const dateInputValueHandler = () => {
      if (clickedDate.date) {
        const selectedFormDateValue = moment(`${clickedDate.year}-${clickedDate.month}-${clickedDate.date}`, "YYYY-MM-DD").format('MM/DD/YYYY');

        setDatePickerFormValue(selectedFormDateValue);
      }
    };

    dateInputValueHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedDate]);

  const showCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDatePickerFormValue(event.target.value);
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

  return (
    <>
      <div>
        <button className={styles.iconButton} aria-label="click for calendar" type="button" onClick={showCalendarHandler}><CalendarIcon /></button>
        <input className={styles.inputField} id="date-picker-input" type="text" aria-label="date input" placeholder='MM/DD/YYYY' autoComplete="off" value={datePickerFormValue} onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className={showCalendar ? styles.calendarContainer : styles.hidden} {...(applicationMode ? { role: "application" } : {})}>
        <MonthPicker
          month={dateObject.month}
          year={dateObject.year}
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