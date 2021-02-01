import React, { useState } from "react";
import ReactDOM from "react-dom";

import DatePicker from "../src/container/DatePicker";
import { ThemeProvider } from 'react-jss';
import datePickerTheme from "../src/styles/datePickerTheme";

function App() {

    const [nameData, setNameData] = useState('');
    const [value, setValue] = useState('');

    const preventDefault = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleNameData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameData(event.target.value);
    };

    const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert(`This info has been submitted: ${nameData}, ${value}`)
    };

    return (
        <ThemeProvider theme={datePickerTheme}>
            <form aria-labelledby="form-example" onSubmit={e => preventDefault(e)} method="post">
                <h1>Accessible Date Picker</h1>
                <label htmlFor="name">Name:</label> <br />
                <input style={{ padding: "10px 10px 10px 36px", textAlign: "left" }} type="text" id="name" autoComplete="off" onChange={(e) => handleNameData(e)}></input><br />
                <label htmlFor="date-picker-input">Date:</label><br />
                <DatePicker value={value} setValue={setValue} dateFormat="DD.MM.YYYY" validation={true} />
                <button style={{ marginTop: "12px" }} type="submit" value="Submit" onClick={(e) => submitForm(e)}>Submit</button>
            </form>
        </ ThemeProvider>

    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);