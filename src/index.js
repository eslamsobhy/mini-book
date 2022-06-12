import React from "react";
import ReactDom from "react-dom";

const Greeting = () => <h1>Hello world!</h1>;

ReactDom.render(<Greeting />, document.getElementById("root"));
