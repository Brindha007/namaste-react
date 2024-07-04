import React from "react";
import ReactDOM from 'react-dom/client';
/*
*
*<div id="parent"> 
   <div id="child1">
    <h1 > I am in h1 tag</h1>
    <h2> I am in h2 tag</h2>
   </div>
    <div id="child2">
    <h1 > I am in h1 tag</h1>
    <h2> I am in h2 tag</h2>
   </div>
*</div>
*/
const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I Got Promoted in TCS"),
            React.createElement("h2",{},"This is Namaste React Js")
        ]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I am in h1 tag"),
                React.createElement("h2",{},"I am in h2 tag")
            ]),

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);