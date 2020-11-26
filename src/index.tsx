import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles/styles.css";

const Calendar: React.FC = () => (
  <h1 className={styles.test}>
    React and TypeScript Component!{" "}
    {new Date().toLocaleDateString()}
    test
  </h1>
  //This is where the input is going
  //This is where the date picker will be inserted
);

ReactDOM.render(<Calendar />, document.getElementById("root"));
