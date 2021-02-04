import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import DatesOfMonth from "../components/DatesOfMonth";
import { ThemeProvider } from "react-jss";

configure({ adapter: new Adapter() });

const mockSetClickedDate = jest.fn();
const mockShowCalendarHandler = jest.fn();
const mockSetIsClicked = jest.fn();
const mockSetErrorMesage = jest.fn();
const datePickerTheme = {
    palette: {
        primary: "#f5f5f5",
        secondary: "#2b4450",
        tertiary: "#871111"
    },
    spacing: ["0px", "4px", "8px", "16px", "32px", "64px"],
};

const wrapper = shallow(<DatesOfMonth year={2021} month={0} datesOfMonth={31} setClickedDate={mockSetClickedDate}
    showCalendarHandler={mockShowCalendarHandler} isClicked={false} setIsClicked={mockSetIsClicked} setErrorMesage={mockSetErrorMesage} />);

test("renders table with correct amount of elements", () => {
    const tbody = wrapper.find('tbody');
    expect(tbody).toHaveLength(1);

    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(6);

    const buttons = wrapper.find('button');
    expect(buttons).toHaveLength(31);
});

test("clickedDate changes states as expected", () => {
    wrapper.find('#button-1').simulate('click');
    expect(mockSetClickedDate).toHaveBeenCalledWith({ year: 2021, month: 1, date: 1 });
    expect(mockSetIsClicked).toHaveBeenCalledWith({ buttonId: "button-1", selected: true });
    expect(mockSetErrorMesage).toHaveBeenCalledWith("");
    expect(mockShowCalendarHandler).toHaveBeenCalled();

    expect(toJson(wrapper)).toMatchSnapshot();
});

