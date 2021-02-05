import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import DaysHeading from "../components/DaysHeading";
import { ThemeProvider } from "react-jss";

configure({ adapter: new Adapter() });

test("matches snapshot of DaysHeading", () => {
  const wrapper = shallow(<ThemeProvider><DaysHeading /></ThemeProvider>);
  expect(toJson(wrapper)).toMatchSnapshot();
});