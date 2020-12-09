import React from "react";
import ReactDOM from "react-dom";

import DatePicker from "./containers/DatePicker";

function App() {
    // const json = { name: sting, birth: string }
    return (
        <>
            <h1>Accessible Date Picker</h1>
            <form>
                <fieldset>
                    <label>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"></input><br />
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age"></input><br />
                        <label htmlFor="birthday">Birthdate</label>
                        <input type="date" name="datepicker"></input><br />
                    </label>
                </fieldset>
                <button type="submit">Submit!</button>
            </form>
            <DatePicker />
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