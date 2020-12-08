import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./containers/Calendar";

function App() {
    return <Calendar applicationMode={true} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
