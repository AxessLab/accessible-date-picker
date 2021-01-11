import React, { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./styles/stylesDatePicker.css";
import DatePicker from "./containers/DatePicker";

function App() {

    const styleLabel = {
        padding: "8px",
        margin: "4px"
    };

    const [nameData, setNameData] = useState('');
    const [datePickerFormValue, setDatePickerFormValue] = useState('');

    const preventDefault = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleNameData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameData(event.target.value);
    };

    const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert(`This info has been submitted: ${nameData}, ${datePickerFormValue}`)
    };

    return (
        <>
            <form aria-labelledby="form-example" onSubmit={e => preventDefault(e)} method="post">
                <h1 style={styleLabel}>Accessible Date Picker</h1>
                <label style={styleLabel} htmlFor="name">Name:</label> <br />
                <input className={styles.inputField} type="text" name="name" aria-label="name input" onChange={(e) => handleNameData(e)}></input><br />
                <label style={styleLabel} htmlFor="date">Date:</label><br />
                <DatePicker datePickerFormValue={datePickerFormValue} setDatePickerFormValue={setDatePickerFormValue} />
                <button type="submit" value="Submit" onClick={(e) => submitForm(e)}>Submit</button>
            </form>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//questions for Joel: How did MUI manage to keep state inside?

// work outside to inside
// how do I connect it -check Material UI
// create input for a date-picker
// making sure the typed date is what is selected on calendar
// click to be able to open a modal => and fill that up

// add different configurations
// add tests
// add labels to the bottom to show value => for show purposes?