import React from "react";
import moment from 'moment';
import { createUseStyles, useTheme } from 'react-jss';

interface IIsClicked {
    buttonId: string,
    selected: boolean
}

interface IDaysOfMonthsProps {
    year: number;
    month: number;
    datesOfMonth: number;
    applicationMode?: boolean;
    setClickedDate: ({ }) => void;
    showCalendarHandler: () => void;
    isClicked: IIsClicked;
    setIsClicked: (object: IIsClicked) => void
    setErrorMesage: (value: string) => void
}

const useStyles = createUseStyles({
    disabledCalendarCell: {
        backgroundColor: ({ theme }) => theme.palette.primary,
    },
    calendarCells: {
        width: ({ theme }) => theme.spacing[4],
        height: ({ theme }) => theme.spacing[4],
        border: "none",
        backgroundColor: ({ theme }) => theme.palette.primary,
        color: ({ theme }) => theme.palette.secondary,
    },
    clickedDateButton: {
        backgroundColor: ({ theme }) => theme.palette.secondary,
        borderRadius: "50%",
        color: ({ theme }) => theme.palette.primary,
    }
});

const DatesOfMonth: React.FC<IDaysOfMonthsProps> = (props) => {
    const { year, month, datesOfMonth, applicationMode, setClickedDate, showCalendarHandler, isClicked, setIsClicked, setErrorMesage } = props
    const theme = useTheme();
    const styles = useStyles({ ...props, theme });

    const clickedDateHandler = (year: number, month: number, date: number, buttonId: string) => {
        setClickedDate({ year: year, month: month + 1, date: date });
        setIsClicked({ buttonId: buttonId, selected: true });
        setErrorMesage("");
        showCalendarHandler();
    };

    const findFirstDayOfMonth = () => {
        const firstDay = moment().year(year).month(month).startOf("month").format("d");
        return +firstDay;
    };

    const ariaLabelFormatter = (year: number, month: number, date: number) => {
        const day = moment(`${year}-${month + 1}-${date}`, "YYYY-MM-DD").format('dddd MMMM Do YYYY');
        return day;
    };

    const blankCells: JSX.Element[] = [];
    for (let i = 0; i < findFirstDayOfMonth(); i++) {
        blankCells.push(
            <td key={i} role="presentation" className={styles.disabledCalendarCell}></td>
        );
    }

    const datesInMonth: JSX.Element[] = [];
    for (let date = 1; date <= datesOfMonth; date++) {
        datesInMonth.push(
            <td id={`tabledata-${date}`} key={date} role="presentation" tabIndex={applicationMode ? `tabledata-${date}` === "tabledata-1" ? 0 : -1 : -1}>
                <button
                    id={`button-${date}`}
                    key={`button-${year}-${month + 1}-${date}`}
                    className={`${styles.calendarCells} ${isClicked.buttonId === `button-${date}` && isClicked.selected ? styles.clickedDateButton : ""}`}
                    onClick={() => clickedDateHandler(year, month, date, `button-${date}`)}
                    tabIndex={applicationMode ? isClicked.buttonId === `button-${date}` && isClicked.selected ? 0 : -1 : 0}
                    aria-label={`${isClicked.buttonId === `button-${date}` && isClicked.selected ? "Selected date" : ""} ${ariaLabelFormatter(year, month, date)}`}
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
            calendarRows.shift();
        }
    });

    return (
        <tbody role="presentation">
            { calendarRows.map((date, i) =>
                (<tr key={`${year}-${month}-${i}`} role="presentation"> {date} </tr>))
            }
        </tbody>)
};

export default DatesOfMonth;
