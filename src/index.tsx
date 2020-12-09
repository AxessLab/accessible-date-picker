import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles/stylesDatePicker.css";
import DatePicker from "./containers/DatePicker";

function App() {
    // const json = { name: sting, birth: string }
    const styleLabel = {
        padding: "8px",
        margin: "4px"
    }

    return (
        <>
            <h1 style={styleLabel}>Accessible Date Picker</h1>
            <form >
                <label style={styleLabel} htmlFor="name">Name:</label> <br />
                <input className={styles.inputField} type="text" name="name"></input><br />
                <label style={styleLabel} htmlFor="age">Age:</label><br />
                <input className={styles.inputField} type="number" name="age"></input><br />
                <label style={styleLabel} htmlFor="birthday">Birthdate:</label><br />
                <DatePicker />
            </form>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// how do I connect it -check Material UI
// create input for a date-picker
// to be able to open a modal => and fill that up
// work outside to inside
// add different configurations
// add labels to the bottom to show value