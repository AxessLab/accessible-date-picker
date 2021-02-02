import React from "react";
import moment from "moment";
import { createUseStyles, useTheme } from 'react-jss';

interface ISetDateObject {
    year: number;
    month: number;
    dates: number;
}

interface IMonthPickerProps {
    currentDate: {
        year: number;
        month: number;
        dates?: number;
    }
    clickedDate: {
        year?: number;
        month?: number;
        date?: number;
    };
    setDateObject: (object: ISetDateObject) => void;
}

const useStyles = createUseStyles({
    monthSelectionButtons: {
        boxSizing: "content-box",
        border: "none",
        lineHeight: ({ theme }) => theme.spacing[2],
        padding: ({ theme }) => theme.spacing[3],
        color: ({ theme }) => theme.palette.tertiary,
        backgroundColor: ({ theme }) => theme.palette.primary,
        fontSize: "medium",
        textDecoration: "underline",
        '&:hover': {
            color: ({ theme }) => theme.palette.primary,
            backgroundColor: ({ theme }) => theme.palette.tertiary,
        },
    },
    previousCalendarButton: {
        float: "left",
    },
    nextCalendarButton: {
        float: "right",
    },
    h2Month: {
        margin: ({ theme }) => theme.spacing[0],
        lineHeight: ({ theme }) => theme.spacing[2],
        padding: ({ theme }) => theme.spacing[3],
        boxSizing: "content-box",
        display: "inline-block",
        backgroundColor: ({ theme }) => theme.palette.primary,
        color: ({ theme }) => theme.palette.secondary,
    }
});

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MonthPicker: React.FC<IMonthPickerProps> = (props) => {
    const { currentDate, setDateObject, clickedDate } = props;
    const theme = useTheme();
    const styles = useStyles({ ...props, theme });

    type changeMonthParameter = "next" | "previous";
    const changeMonthHandler = (selection: changeMonthParameter) => {
        let selectedYear = clickedDate.year ? clickedDate.year : currentDate.year;
        let selectedMonth = clickedDate.month ? clickedDate.month - 1 : currentDate.month;

        if (selection === "next") {
            if (selectedMonth + 1 === 12) {
                selectedYear++;
                selectedMonth = 0;
            } else {
                selectedMonth++;
            }
        }

        if (selection === "previous") {
            if (selectedMonth - 1 >= 0) {
                selectedMonth--;
            } else {
                selectedYear--;
                selectedMonth = 11;
            }
        }

        const selectedDates = +moment(`${selectedYear}-${selectedMonth + 1}`, "YYYY-MM").daysInMonth();

        setDateObject({
            year: +selectedYear,
            month: +selectedMonth,
            dates: +selectedDates
        });

    };

    return (
        <div aria-live="assertive">
            <button id="button-previous" className={`${styles.previousCalendarButton} ${styles.monthSelectionButtons}`} aria-label="previous month" onClick={() => { changeMonthHandler("previous") }}>Previous</button>
            <h2 className={styles.h2Month} id="month-label">{monthArray[clickedDate.month ? clickedDate.month - 1 : currentDate.month]}{" "}{clickedDate.year ? clickedDate.year : currentDate.year}</h2>
            <button id="button-next" className={`${styles.nextCalendarButton} ${styles.monthSelectionButtons}`} aria-label="next month" onClick={() => { changeMonthHandler("next") }}>Next</button>
        </div>
    );
};

export default MonthPicker;