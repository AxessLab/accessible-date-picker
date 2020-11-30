import React from "react";

const DaysHeading: React.FC = () => {
    const weekdaysAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <thead role='presentation'>
            <tr role='presentation'>
                {weekdaysAbbr.map((day, i) => (
                    <th key={i} scope='col' role='presentation'>
                        <abbr key={i} aria-hidden='true' title={day}>
                            {day}
                        </abbr>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default DaysHeading;