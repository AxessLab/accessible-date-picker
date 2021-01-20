import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import DaysHeading from "../components/DaysHeading";

configure({ adapter: new Adapter() });

test("matches snapshot of DaysHeading", () => {
  const wrapper = shallow(<DaysHeading />);
  expect(toJson(wrapper)).toMatchSnapshot();
});