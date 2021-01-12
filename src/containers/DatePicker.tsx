import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import styles from "../styles/stylesDatePicker.css";

import CalendarIcon from "../components/CalendarIcon";
import MonthPicker from "../components/MonthPicker";
import DaysHeading from "../components/DaysHeading";
import DatesOfMonth from "../components/DatesOfMonth";
import { keyDownHandler } from "../utility/functions";

interface IDatePickerProps {
  applicationMode?: boolean;
  value: string;
  setValue: (value: string) => void;
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

const Calendar: React.FC<IDatePickerProps> = (props) => {
  const { value, setValue } = props
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
        const selectedFormDateValue = moment(`${clickedDate.year}-${clickedDate.month}-${clickedDate.date}`, "YYYY-MM-DD").format('MM/DD/YYYY');

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

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);

    if (value.length === 10) {
      const month = value.charAt(0) + value.charAt(1);
      const date = value.charAt(3) + value.charAt(4);
      const year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);

      setClickedDate({ year: +year, month: +month, date: +date });
      setIsClicked({ buttonId: +date < 10 ? `button-${value.charAt(4)}` : `button-${date}`, selected: true });
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
        <button className={styles.iconButton} aria-label="click to toggle calendar" type="button" onClick={showCalendarHandler}><CalendarIcon /></button>
        <input className={styles.inputField} id="date-picker-input" type="text" aria-label={value.length > 1 ? "entered date value" : "enter date in following format"} autoComplete="off" value={value} onChange={(e) => onChangeHandler(e)} />
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
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </table>
      </div>
    </>
  );
};

export default Calendar;