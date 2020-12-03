import React from "react";
import styles from "../styles/stylesCalendar.css";

type changeMonthParameter = "next" | "previous";
interface MonthPickerProps {
    month: number;
    year: number;
    changeMonthHandler: (selection: changeMonthParameter) => void;
}

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MonthPicker: React.FC<MonthPickerProps> = (props) => {
    const { month, year, changeMonthHandler } = props

    return (
        <div>
            <button className={styles.previousButton} onClick={() => { changeMonthHandler("previous") }}>Previous</button>
            <h2 id="month-label" aria-live="assertive">{monthArray[month]}{" "}{year}</h2>
            <button className={styles.nextButton} onClick={() => { changeMonthHandler("next") }}>Next</button>
        </div>
    );
};  

export default MonthPicker;