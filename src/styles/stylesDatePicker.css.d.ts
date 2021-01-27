declare namespace StylesDatePickerCssNamespace {
  export interface IStylesDatePickerCss {
    abbrDays: string;
    calendarCells: string;
    calendarContainer: string;
    calendarTableContainer: string;
    clickedDateButton: string;
    disabledCalendarCell: string;
    h2DatePicker: string;
    hiddenCalendar: string;
    iconButton: string;
    inputFieldDatePicker: string;
    labelDatePicker: string;
    monthSelectionButtons: string;
    nextCalendarButton: string;
    previousCalendarButton: string;
  }
}

declare const StylesDatePickerCssModule: StylesDatePickerCssNamespace.IStylesDatePickerCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesDatePickerCssNamespace.IStylesDatePickerCss;
};

export = StylesDatePickerCssModule;
