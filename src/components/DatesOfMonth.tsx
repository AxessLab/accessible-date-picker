import React from "react";
import moment from 'moment';
import styles from "../styles/stylesCalendar.css";

interface DaysOfMonthsProps {
    year: number;
    month: number;
    daysOfMonth: number;
}

const DatesOfMonth: React.FC<DaysOfMonthsProps> = (props) => {
    const { year, month, daysOfMonth } = props

    const firstDayOfMonth = () => {
        const firstDay = moment().year(year).month(month).startOf("month").format("d");
        return +firstDay;
    };

    const blankCells: JSX.Element[] = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blankCells.push(
            <td role="presentation">No!</td>
        );
    }

    const datesInMonth: JSX.Element[] = [];
    for (let day = 1; day <= daysOfMonth; day++) {
        datesInMonth.push(
            <td key={day} role="presentation">
                <button className={styles.calendarCells}>{day}</button>
            </td>
        );
    }

    const totalDateElementsOfCalendar = [...blankCells, ...datesInMonth];
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
                (<tr key={i} role="presentation" > {date} </tr>))
            }
        </tbody>)
};

export default DatesOfMonth;
