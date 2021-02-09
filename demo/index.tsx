import React, { useState } from "react";
import ReactDOM from "react-dom";

import DatePicker, { createDatePickerTheme, IDatePickerTheme } from "../src/container/DatePicker";

const customTheme: IDatePickerTheme = createDatePickerTheme({
        palette: {
        primary: "#f5f5f5",
        secondary: "#2b4450",
        tertiary: "#871111"
    },
    spacing: ["0px", "4px", "8px", "16px", "32px", "64px"],
    });

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
        <form aria-labelledby="form-example" onSubmit={e => preventDefault(e)} method="post">
            <h1>Accessible Date Picker</h1>
            <label htmlFor="name">Name:</label> <br />
            <input style={{ padding: "8px 8px 8px 32px", textAlign: "left" }} type="text" id="name" autoComplete="off" onChange={(e) => handleNameData(e)}></input><br />
            <label htmlFor="date-picker-input">Date:</label><br />
            <DatePicker theme={customTheme} value={value} setValue={setValue} dateFormat="DD.MM.YYYY" validation={true} />
            <button style={{ marginTop: "12px" }} type="submit" value="Submit" onClick={(e) => submitForm(e)}>Submit</button>
        </form>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);