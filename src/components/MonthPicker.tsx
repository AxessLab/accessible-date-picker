import React from "react";
import moment from "moment";
import styles from "../styles/stylesDatePicker.css";

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

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MonthPicker: React.FC<IMonthPickerProps> = (props) => {
    const { currentDate, setDateObject, clickedDate } = props;

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
        <div>
            <button id="button-previous" className={`${styles.previousButton} ${styles.monthSelectionButtons}`} aria-label="previous month" onClick={() => { changeMonthHandler("previous") }}>Previous</button>
            <h2 id="month-label" aria-live="assertive">{monthArray[clickedDate.month ? clickedDate.month - 1 : currentDate.month]}{" "}{clickedDate.year ? clickedDate.year : currentDate.year}</h2>
            <button id="button-next" className={`${styles.nextButton} ${styles.monthSelectionButtons}`} aria-label="next month" onClick={() => { changeMonthHandler("next") }}>Next</button>
        </div>
    );
};

export default MonthPicker;