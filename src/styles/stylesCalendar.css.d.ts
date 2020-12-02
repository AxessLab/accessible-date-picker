declare namespace StylesCalendarCssNamespace {
  export interface IStylesCalendarCss {
    calendarCells: string;
    calendarContainer: string;
    calendarTableContainer: string;
    clickedDateButton: string;
    disabled: string;
    nextButton: string;
    previousButton: string;
  }
}

declare const StylesCalendarCssModule: StylesCalendarCssNamespace.IStylesCalendarCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesCalendarCssNamespace.IStylesCalendarCss;
};

export = StylesCalendarCssModule;
