import React from "react";

interface DaysOfMonthProps {
    month: number;
    year: number;
}

const DaysOfMonth: React.FC<DaysOfMonthProps> = (props) => {
    const { month, year } = props;

    const getDaysInMonth = (month: number, year: number) => {
        const date = new Date(year, month, 1);
        const daysArray = [];

        while (date.getMonth() === month) {
            daysArray.push(new Date(date).getDate());
            date.setDate(date.getDate() + 1);
        }

        return daysArray;
    };

    return (
        <>
            {getDaysInMonth(month, year).map((day, i) => (
                <td key={i} role='presentation'>
                    {day}
                </td>
            ))}
        </>

    );
};

export default DaysOfMonth;
