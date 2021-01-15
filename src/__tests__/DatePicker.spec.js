import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import DaysHeading from "../components/DaysHeading"
// import DatePicker from '../containers/DatePicker'

configure({ adapter: new Adapter() });

test("matches snapshot of DaysHeading", () => {
  const wrapper = shallow(<DaysHeading />);

  expect(toJson(wrapper)).toMatchSnapshot();
})


// const datePickerComponent = shallow(<DatePicker value={value} setValue={setValue} dateFormat={dateFormat} />)

// it(" DatePicker renders without crashing", () => {

// });



// const onDateChange = jest.fn()
// const component = shallow(<Aquaculturedatepicker onDateChange={onDateChange} />) 

// const dayPickers = component.find('DayPickerInput')
// dayPickers.at(0).prop('onDayChange')('date1')
// dayPickers.at(1).prop('onDayChange')('date2')


// component.find('Form').simulate('submit')
// expect(onDateChange).toHaveBeenCalledWith('date1', 'date2')