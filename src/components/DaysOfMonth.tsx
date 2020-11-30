import React from "react";
import moment from 'moment';

interface DaysOfMonthsProps {
    year: number;
    month: number;
    daysOfMonth: number;
}

const DaysOfMonth: React.FC<DaysOfMonthsProps> = (props) => {
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
                <button>{day}</button>
            </td>
        );
    }

    const totalDateElementsOfCalendar = [...blankCells, ...datesInMonth];
    const calendarRows: (JSX.Element | JSX.Element[])[] = [];
    let calendarSlot: JSX.Element[] = [];

    totalDateElementsOfCalendar.forEach((dateElement, i) => {
        if (i % 7 !== 0) {
            calendarSlot.push(dateElement); // if index is not equal to 7 dont go to next week
        } else {
            calendarRows.push(calendarSlot); // when next week is reached, contain all td in last week to calendarRows 
            calendarSlot = []; // empty container 
            calendarSlot.push(dateElement); // in current loop still push current dateElement to the new container
        }
        if (i === totalDateElementsOfCalendar.length - 1) { // when loop ends, add the remaining date
            calendarRows.push(calendarSlot);
        }
    });

    return (<>
        { calendarRows.map((date, i) =>
            (<tr key={i} role="presentation"> {date} </tr>))
        }
    </>)
};

export default DaysOfMonth;
