import DatePicker from '../containers/DatePicker'

test('the datepicker is correct', () => {
  expect(DatePicker).toMatchSnapshot();
});