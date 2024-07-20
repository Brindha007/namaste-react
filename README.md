Namaste React JS 

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differencial Bundling - supports older browsers / all kind of browsers and Mobile browsers
- Diagnostic - showing error immediately for keyword spelling mistakes
- Error Handling
- HTTPs
- Tree shaking -remove unused codes

https://parceljs.org/

# JSX
- JSX - HTML like or XML like syntax.
- JSX is not HTML inside JavaScript.
- JS Engine doesn't understand JSX(Not pure JavaScript).
- JSX code transpiled before it goes to JS Engine.
- Transpiled means converting code into browser understandable code.
- PARCEL -> BABEL (Complier to converted code)
- JSX -> Babel transpiles it to React.createElement -> React Element - Object -> HTMLElement (render).
- const jsxheading = <h1 className="heading"> JSX starting...</h1>;
- className="heading" for JSX syntax which is converted into HTML syntax in browser class="heading"
- To write JSX in multiple lines wrap it in round brackets()
- JSX can handle malicious data. It prevents cross site scripting attacks.
- JSX much more readable and make it faster than react.
- {} inside paranthesis we can write any kind of Javascript expressions/Functions.

# React Component
- Component Inside component is called React component composition.
- the JSX tag name convention (lowercase names refer to built-in components, capitalized names refer to custom components).
- While a React element is a plain object describing a part of the UI, a React component is a function or a class that can produce React elements and manage their state and lifecycle. Components can return multiple elements, components, strings, numbers, or any other types React can render.
- We can write anything inside anything. here anything refers to React Element / React Component. 
- 1.Class based components 2.Function based components
- Function based components is a function that returns piece of JSX code / React Element
- Arrow functions most widely used for function declarion in React JS.

# Props (Properties)
- Props is used for dynamically passing data to React components.
- Props is Object
- In Real time we are fetching data from JSON and passing it through props.

# Config Driven UI (System design interview imp qus)
- We won't design website based on location.
- Our website driven by data
- This is known as Config Driven UI.

# map
- In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

# Destructuring and Optional Chaining
- Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.
-Old way: 
    const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

    const firstName = profile[0];
    const lastName = profile[1];
    const website = profile[2];

    console.log(firstName); // "Oluwatobi"
    console.log(lastName); // "Sofela"
    console.log(website); // "codesweetly.com"

-New way using destructuring
    const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

    const [firstName, lastName, website] = profile;

    console.log(firstName); // "Oluwatobi"
    console.log(lastName); // "Sofela"
    console.log(website); // "codesweetly.com"



