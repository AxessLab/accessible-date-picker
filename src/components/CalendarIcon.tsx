import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { IDatePickerTheme } from '../container/DatePicker';

const CalendarIcon: React.FC = (props) => {
    const useStyles = createUseStyles((theme: IDatePickerTheme) => ({
        icon: {
            width: theme.spacing[3],
        }
    }));
    const theme = useTheme();
    const styles = useStyles({ ...props, theme });

    return (
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    )
};

export default CalendarIcon;     