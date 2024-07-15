import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  "Welcome to Namaste react js"
);

//Initial Code
 const root = ReactDOM.createRoot(document.getElementById("root"));
 /* root.render(heading);
  console.log(heading); */

//JSX -> React.createElement -> ReactElemt -Object -> HTMLElement (render)
/* const jsxheading = <h1 className="heading">JSX starting...</h1>;
  root.render(jsxheading);
  console.log(jsxheading); */

//React Element
const reactElement = <h1> Brindha D is Expert in React JS!!</h1>;

//React Functional Component

const Title = () => (<h1>Hello Universe!</h1>);
console.log(Title);
// *Component Inside component is called React component composition.
const HeadingComponent = () => (
  <>
  <h1> Brindha D is Expert in Frontend Development!!</h1>,
  <h1> Brindha D is Expert in Frontend Development!!</h1>
  </>
);

root.render(<HeadingComponent />);
