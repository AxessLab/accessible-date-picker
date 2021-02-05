import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import MonthPicker from "../components/MonthPicker";
import { ThemeProvider } from "react-jss";

configure({ adapter: new Adapter() });

const currentDate = {
    year: 2021,
    month: 0,
    dates: 31
};
const clickedDate = {}
const mockSetDateObject = jest.fn();
const theme = {
    palette: {
        primary: "#f5f5f5",
        secondary: "#2b4450",
        tertiary: "#871111"
    },
    spacing: ["0px", "4px", "8px", "16px", "32px", "64px"],
};

const wrapper = shallow(<ThemeProvider theme={theme}><MonthPicker currentDate={currentDate} clickedDate={clickedDate} setDateObject={mockSetDateObject} /></ThemeProvider>);

test("renders correct heading that changes with next/previous", () => {
    wrapper.dive().find('#button-next').simulate('click');
    expect(mockSetDateObject).toHaveBeenCalled();

    wrapper.find('#button-previous').simulate('click');
    expect(mockSetDateObject).toHaveBeenCalled();

    const h2 = wrapper.find('#month-label').text();
    expect(h2).toEqual("January 2021");

    expect(toJson(wrapper)).toMatchSnapshot();
});

