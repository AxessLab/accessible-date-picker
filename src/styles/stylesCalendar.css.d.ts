declare namespace StylesCalendarCssNamespace {
  export interface IStylesCalendarCss {
    calendarContainer: string;
  }
}

declare const StylesCalendarCssModule: StylesCalendarCssNamespace.IStylesCalendarCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesCalendarCssNamespace.IStylesCalendarCss;
};

export = StylesCalendarCssModule;
