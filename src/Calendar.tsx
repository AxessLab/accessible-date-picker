import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles/stylesCalendar.css";
import { days } from "./utils/utils";
import Heading from "./components/Heading";

const Calendar: React.FC = () => {
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    setMonth(currentMonth);
  }, []);

  return (
    <>
      <Heading />
      {/* This is where the input is going */}

      <table id='calendar-table' className={styles.calendarContainer}>
        <thead role='presentation'>
          <tr role='presentation'>
            {days.map((day: string, i: number) => (
              <th key={i} scope='col' role='presentation'>
                <abbr key={i} aria-hidden='true' title={day}>
                  {day.slice(0, 2)}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody role='presentation'>
          <tr role='presentation'>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

ReactDOM.render(<Calendar />, document.getElementById("root"));
export default Calendar;
