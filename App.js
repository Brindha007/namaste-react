import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div",{id:"parent"},"Welcome to Namaste react js");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//JSX -> React.createElement -> ReactElemt -Object -> HTMLElement (render)

const jsxheading = <h1 className="heading"> JSX starting...</h1>;
root.render(jsxheading);

console.log(jsxheading);

console.log(heading);