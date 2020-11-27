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
        //console.log("firstday ", firstDay)
        return +firstDay;
    };

    const blankCells = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blankCells.push(
            <td role="presentation">No!</td>
        );
    }

    const daysInMonth = [];
    for (let day = 1; day <= daysOfMonth; day++) {
        daysInMonth.push(
            <td key={day} role="presentation">
                <button>{day}</button>
            </td>
        );
    }

    const totalCellsOfCalendar = [...blankCells, ...daysInMonth];
    const rows: any[][] = [];
    let cells: any[] = [];

    totalCellsOfCalendar.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows 
            cells = []; // empty container 
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalCellsOfCalendar.length - 1) { // when end loop we add remaining date
            rows.push(cells);
        }
    });



    return (<>
        { rows.map((date, i) =>
            (<tr key={i} role="presentation"> {date} </tr>))
        }
    </>)
};

export default DaysOfMonth;
