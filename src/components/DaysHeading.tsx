import React from "react";
import { createUseStyles, useTheme } from 'react-jss';
import { withTheme } from 'theming';

const useStyles = createUseStyles(theme => ({
    abbrDays: {
        border: "none",
        textDecoration: "none",
        padding: theme.spacing[2],
        color: theme.palette.tertiary,
    }
}));

const DaysHeading: React.FC = (props) => {
    const weekdaysAbbr = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const theme = useTheme();
    const styles = useStyles({ ...props, theme });

    return (
        <thead role='presentation'>
            <tr role='presentation'>
                {weekdaysAbbr.map((day, i) => (
                    <th key={i} scope='col' role='presentation'>
                        <abbr className={styles.abbrDays} key={i} aria-hidden='true' title={day}>
                            {day.slice(0, 3)}
                        </abbr>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default withTheme(DaysHeading);