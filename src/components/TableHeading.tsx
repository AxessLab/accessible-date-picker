import React from "react";
import moment from 'moment';

const TableHeading: React.FC = () => {
    const weekdaysAbbr = moment.weekdaysShort();

    return (
        <thead role='presentation'>
            <tr role='presentation'>
                {weekdaysAbbr.map((day: string, i: number) => (
                    <th key={i} scope='col' role='presentation'>
                        <abbr key={i} aria-hidden='true' title={day}>
                            {day.slice(0, 2)}
                        </abbr>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeading;