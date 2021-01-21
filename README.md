# Accessible Date Picker

Accessible Date Picker is a component designed for React.js. Why yet another date picker? 
It is very difficult to find a date picker that is accessible, has an inclusive design
and is easy to use by everyone.
We at Axess Lab decided to build one and open source it so that others could benefit 
from it. 

 ![DatePicker](/datePickerImage.png)

<br/>

## Getting Started 
With an application built using the <code>create-react-app</code> script the easiest way to include Accessible Date Picker is to import it in to the file you will be using it in:

<code> import { Datepicker } from "@something/something/something"; </code>

Then the component can be used as such: 

<code> < DatePicker value={value} setValue={setValue} dateFormat="YYYY/MM/DD" /> </code>


## Properties

| Attribute Name | Mandatory | Value | Description |    
| :-----------: |:-----------:| :-----------:| :-----|
| applicationMode | no    | boolean  | The Accessible Date Picker comes with two modes for the screen readers. By default the picker has <code>applicationMode={false}</code>, which means traditional HTML interpretion techniques will be used. But if you want to support desktop-live web like applications passing down the following attribute will make the date picker behave as such.  |
| dateFormat | yes     | "YYYY/MM/DD"  "DD/MM/YYYY"  "MM/DD/YYYY"     |   Enter the string format you wish you use in your input element. |
| value | yes      |    {value} | To get started you can define a state for value and setValue and pass it down to the component or pass a value you have created as a prop. Exp:  <code>const [value, setValue] = useState('');</code>
| setValue | yes      |    {setValue} | To get started you can define a state for value and setValue and pass it down to the component or pass a value you have created as a prop. Exp:  <code>const [value, setValue] = useState('');</code>

<br/>

## Features

The Aria labels will read out each date of the month and will adjust labels according to selection. The icon is
screen reader friendly. It will let the user know whether the calendar is open or not and the screen reader 
will read an error if it occurs.

The date picker has a basic validation check for entered dates. It can point out errors in 
overflow, date and month.

 ![DatePicker](/errorImage.png)


## How to install 
You can install the date picker as a npm package by running the following command in your project:

<code>npm i accessible-date-picker</code>


## How to contribute 
We are always open to contributions and improvements. If you find bugs or know of ways of improving our date picker by extra props, styles, screen reader issues help us out by:
1. Forking the Accessible Date Pickers repository on github
2. Clone the repository by running git clone https://github.com/AxessLab/accessible-date-picker.git
3. Once cloned, open the directory and <code>run npm install.</code>
4. Run <code>npm start</code> to get the development server up and running at http://localhost:4000/. Make your changes in the code.
5. When you're happy, push the code and make a pull request - we will look at it as soon as possible.

### Testing and building

1. To run the unit test run  <code>npm test</code>.
2. To build the project use <code>npm build</code>.