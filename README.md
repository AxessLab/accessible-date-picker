# Accessible Date Picker

Accessible Date Picker is a component designed for React.js. Why yet another date picker? 
It is very difficult to find a date picker that is accessible, has an inclusive design
and is easy to use by everyone.
We at Axess Lab decided to build one and open source it so that others could benefit 
from it. 

 ![DatePicker](/datePickerImage.png)


## Usage

The Accessible Date Picker comes with two modes for the screen readers. 
By default the picker has <code>applicationMode={false}</code>, which means traditional HTML 
interpretion techniques will be used. But if you want to support desktop-live web like applications 
passing down the following attribute will make the date picker behave as such. 

    <DatePicker applicationMode={true} />

To get started you will need to define a state for value and setValue and pass it down to the component.

> const [value, setValue] = useState('');

Currently, the date picker supports the following formats for input:

> "YYYY/MM/DD" | "DD/MM/YYYY" | "MM/DD/YYYY"

Simply add you preference as an attribute:

    <DatePicker dateFormat="YYYY/MM/DD" value={value} setValue={setValue}  />

## Features

The Aria labels willread out each date of the month and will adjust labels accourding to selection. The icon is
screen reader friendly. It will let the user know weather the calendar is open or not and the screen reader 
will read an error if it occurs.

The date picker has a basic validation check for entered dates. It can point out errors in 
overflow, date and month.

 ![DatePicker](/errorImage.png)


## How to install and run
* ```npm install```
* ```npm start```

## How to test
* ```npm test```
