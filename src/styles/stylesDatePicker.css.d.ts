declare namespace StylesDatePickerCssNamespace {
  export interface IStylesDatePickerCss {
    calendarCells: string;
    calendarContainer: string;
    calendarTableContainer: string;
    clickedDateButton: string;
    disabled: string;
    hidden: string;
    iconButton: string;
    inputField: string;
    monthSelectionButtons: string;
    nextButton: string;
    previousButton: string;
  }
}

declare const StylesDatePickerCssModule: StylesDatePickerCssNamespace.IStylesDatePickerCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesDatePickerCssNamespace.IStylesDatePickerCss;
};

export = StylesDatePickerCssModule;
