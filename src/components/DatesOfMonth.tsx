import React, { useState } from "react";
import moment from 'moment';
import styles from "../styles/stylesCalendar.css";

interface DaysOfMonthsProps {
    year: number;
    month: number;
    datesOfMonth: number;
    setClickedDate: ({ }) => void;
}

const DatesOfMonth: React.FC<DaysOfMonthsProps> = (props) => {
    const { year, month, datesOfMonth, setClickedDate } = props
    const [isClicked, setIsClicked] = useState({
        buttonId: "",
        selected: false
    });

    const clickedDateHandler = (year: number, month: number, date: number, buttonId: string) => {
        setClickedDate({ year: year, month: month + 1, date: date });
        setIsClicked({ buttonId: buttonId, selected: true });
    };

    const firstDayOfMonth = () => {
        const firstDay = moment().year(year).month(month).startOf("month").format("d");
        return +firstDay;
    };

    const dayOfDate = (year: number, month: number, date: number) => {
        const day = moment(`${year}-${month + 1}-${date}`, "YYYY-MM-DD").format('dddd MMMM Do YYYY');
        return day;
    };

    const blankCells: JSX.Element[] = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blankCells.push(
            <td role="presentation" className={styles.disabled}></td>
        );
    }

    const datesInMonth: JSX.Element[] = [];
    for (let date = 1; date <= datesOfMonth; date++) {
        datesInMonth.push(
            <td id={`tabledata-${date}`} key={date} role="presentation" tabIndex={`tabledata-${date}` === "tabledata-1" ? 0 : -1}>
                <button
                    id={`button-${date}`}
                    key={`button-${date}`}
                    className={`${styles.calendarCells} ${isClicked.buttonId === `button-${date}` && isClicked.selected ? styles.clickedDateButton : ""}`}
                    onClick={() => clickedDateHandler(year, month, date, `button-${date}`)}
                    tabIndex={isClicked.buttonId === `button-${date}` && isClicked.selected ? 0 : -1}
                    aria-label={`${isClicked.buttonId === `button-${date}` && isClicked.selected ? "Selected date." : ""} ${dayOfDate(year, month, date)}`}
                    aria-pressed={isClicked.buttonId === `button-${date}` && isClicked.selected ? true : false}
                >
                    {date}
                </button>
            </td>
        );
    }

    const totalDateElementsOfCalendar: JSX.Element[] = [...blankCells, ...datesInMonth];
    const calendarRows: (JSX.Element | JSX.Element[])[] = [];
    let calendarSlots: JSX.Element[] = [];

    totalDateElementsOfCalendar.forEach((dateElement, i) => {
        if (i % 7 !== 0) {
            calendarSlots.push(dateElement); // if index is not equal to 7 dont go to next week
        } else {
            calendarRows.push(calendarSlots); // when next week is reached, contain all td in last week to calendarRows 
            calendarSlots = []; // empty container 
            calendarSlots.push(dateElement); // in current loop still push current dateElement to the new container
        }
        if (i === totalDateElementsOfCalendar.length - 1) { // when loop ends, add the remaining dates
            calendarRows.push(calendarSlots);
        }
    });

    return (
        <tbody role='presentation'>
            { calendarRows.map((date, i) =>
                (<tr key={i} role="presentation"> {date} </tr>))
            }
        </tbody>)
};

export default DatesOfMonth;
