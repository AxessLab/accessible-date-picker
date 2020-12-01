import React from "react";

const DaysHeading: React.FC = () => {
    const weekdaysAbbr = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <thead role='presentation'>
            <tr role='presentation'>
                {weekdaysAbbr.map((day, i) => (
                    <th key={i} scope='col' role='presentation'>
                        <abbr key={i} aria-hidden='true' title={day}>
                            {day.slice(0, 3)}
                        </abbr>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default DaysHeading;