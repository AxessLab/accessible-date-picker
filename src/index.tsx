import React, { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./styles/stylesDatePicker.css";
import DatePicker from "./containers/DatePicker";

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
        <>
            <form aria-labelledby="form-example" onSubmit={e => preventDefault(e)} method="post">
                <h1>Accessible Date Picker</h1>
                <label htmlFor="name">Name:</label> <br />
                <input className={styles.inputField} type="text" name="name" aria-label="name input" onChange={(e) => handleNameData(e)}></input><br />
                <label htmlFor="date">Date:</label><br />
                <DatePicker value={value} setValue={setValue} dateFormat="YYYY/MM/DD" />
                <button type="submit" value="Submit" onClick={(e) => submitForm(e)}>Submit</button>
            </form>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);