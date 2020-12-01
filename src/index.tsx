import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./containers/Calendar";

function App() {
    return <Calendar />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
