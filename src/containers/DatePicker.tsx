import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import styles from "../styles/stylesDatePicker.css";

import CalendarIcon from "../components/CalendarIcon";
import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";
import { keyDownHandler } from "../utility/functions";

type DateFormat = "YYYY/MM/DD" | "DD/MM/YYYY" | "MM/DD/YYYY";
interface IDatePickerProps {
  applicationMode?: boolean;
  value: string;
  setValue: (value: string) => void;
  dateFormat: DateFormat;
}

interface IClickedDate {
  date?: number;
  month?: number;
  year?: number;
}

interface IDateObject {
  year: number;
  month: number;
  dates: number;
}

interface IIsClicked {
  buttonId: string,
  selected: boolean
}

const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { value, setValue, dateFormat } = props
  const applicationMode = props.applicationMode ? true : false;
  const [showCalendar, setShowCalendar] = useState(false);
  const [clickedDate, setClickedDate] = useState<IClickedDate>({});
  const [dateObject, setDateObject] = useState<IDateObject>({
    year: +moment().year(),
    month: +moment().month(),
    dates: +moment().daysInMonth(),
  });
  const [isClicked, setIsClicked] = useState<IIsClicked>({
    buttonId: "",
    selected: false
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
        const selectedFormDateValue = moment(`${clickedDate.year}-${clickedDate.month}-${clickedDate.date}`, "YYYY-MM-DD").format(dateFormat);

        setValue(selectedFormDateValue);
      }
    };
    dateInputValueHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedDate]);

  const showCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const escCalendar = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowCalendar(false);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, dateFormat: string) => {
    const value = event.target.value;
    setValue(value);
    let date = "";
    let month = "";
    let year = "";

    if (value.length === 10) {
      if (dateFormat === "YYYY/MM/DD") {
        date = value.charAt(8) + value.charAt(9);
        month = value.charAt(5) + value.charAt(6);
        year = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
      }
      if (dateFormat === "DD/MM/YYYY") {
        date = value.charAt(0) + value.charAt(1);
        month = value.charAt(3) + value.charAt(4);
        year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);
      }
      if (dateFormat === "MM/DD/YYYY") {
        month = value.charAt(0) + value.charAt(1);
        date = value.charAt(3) + value.charAt(4);
        year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);
      }
      setClickedDate({ year: +year, month: +month, date: +date });
      setIsClicked({ buttonId: +date < 10 ? `button-${date.charAt(1)}` : `button-${date}`, selected: true });
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

  return (
    <>
      <div onKeyDown={(e) => escCalendar(e)}>
        <label htmlFor="date-picker-input" className={styles.label} aria-label="enter date in the following format">{dateFormat}</label><br />
        <button className={styles.iconButton} aria-label={showCalendar ? "select to close calendar" : "select to open calendar"} type="button" onClick={showCalendarHandler}><CalendarIcon /></button>
        <input className={styles.inputField} id="date-picker-input" type="text" aria-label={value.length > 1 ? "entered date value is" : `enter date in format ${dateFormat}`} autoComplete="off" value={value} onChange={(e) => onChangeHandler(e, dateFormat)} />
      </div>
      <div className={showCalendar ? styles.calendarContainer : styles.hidden} {...(applicationMode ? { role: "application" } : {})} >
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
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </table>
      </div>
    </>
  );
};

export default DatePicker;