import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";

const Calendar: React.FC = () => (
  <h1 >
    React and TypeScript Component!{" "}
    {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(<Calendar />, document.getElementById("root"));
