import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <h1>
    React and TypeScript Component!{" "}
    {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(<App />, document.getElementById("root"));
