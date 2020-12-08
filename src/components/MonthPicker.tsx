import React from "react";
import moment from "moment";
import styles from "../styles/stylesCalendar.css";

interface SetDateObject {
    year: number;
    month: number;
    dates: number;
}
interface MonthPickerProps {
    month: number;
    year: number;
    setDateObject: (object: SetDateObject) => void;
}

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MonthPicker: React.FC<MonthPickerProps> = (props) => {
    const { month, year, setDateObject } = props

    type changeMonthParameter = "next" | "previous";
    const changeMonthHandler = (selection: changeMonthParameter) => {
        let selectedYear = year;
        let selectedMonth = month;

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
            year: selectedYear,
            month: selectedMonth,
            dates: selectedDates
        });

    };

    return (
        <div>
            <button className={`${styles.previousButton} ${styles.monthSelectionButtons}`} aria-label="previous month" onClick={() => { changeMonthHandler("previous") }}>Previous</button>
            <h2 id="month-label" aria-live="assertive">{monthArray[month]}{" "}{year}</h2>
            <button className={`${styles.nextButton} ${styles.monthSelectionButtons}`} aria-label="next month" onClick={() => { changeMonthHandler("next") }}>Next</button>
        </div>
    );
};

export default MonthPicker;