import React from "react";
import styles from "../styles/stylesCalendar.css";

interface MonthPickerProps {
    month: number;
    year: number;

}

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MonthPicker: React.FC<MonthPickerProps> = (props) => {
    const { month, year } = props

    return (
        <div className={styles.monthPickerContainer}>
            <button>Previous</button>
            <h2 id="month-label" aria-live="polite">{monthArray[month]}{" "}{year}</h2>
            <button>Next</button>
        </div>
    );
};

export default MonthPicker;