import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import DatePicker from "../container/DatePicker";

configure({ adapter: new Adapter() });

const mockValue = ""
const mockSetValue = jest.fn();
const wrapper = shallow(<DatePicker value={mockValue} setValue={mockSetValue} dateFormat="YYYY/MM/DD" />);

test("datePicker changes input state value", () => {
    wrapper.find('input').simulate('change', { target: { name: 'date-picker-input', value: "2020/01/02" } });

    expect(mockSetValue).toHaveBeenCalledWith("2020/01/02");

    expect(toJson(wrapper)).toMatchSnapshot();
});
