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
- If you don't know count of list use map.
- Always give key unique id.
- https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
- Let me explain, a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.
- To help you decide, I put together three conditions which these examples have in common:

        1. the list and items are static–they are not computed and do not change;
        2. the items in the list have no ids;
        3. the list is never reordered or filtered.
        When all of them are met, you may safely use the index as a key.

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

# Optional Chaining
-  //console.log(restaurantList?.na);
- //console.log(restaurantList.name?.cuisines);
- It provides a concise syntax for accessing properties deep within nested objects without encountering errors due to null or undefined values. This helps in writing cleaner and more readable code by reducing the need for explicit null checks and conditionals.

# Export and Import

Syntax	    Export statement	                     Import statement
Default	    export default function Button() {}	     import Button from './Button.js';
Named	    export function Button() {}	             import { Button } from './Button.js';

# useEffect
-   if no dependency array => useEffect is called on every render.
-   if dependency array is empty = [] => useEffect is called on initial render (just once).
-   if dependency array is [loginBtn] => called everytime loginBtn is updated.

# 2 types of Routing in web apps
- Client side Routing- all the components are already loaded into app. Not fetching new page. (Single page application - one page just components getting       interchanged via client side routing).
- Server side Routing- Means when click on anchor tag it reloads whole page and sends network call to about.html fetches html and render it on page.

# /** Higer-Order Component (HOC) is function takes a component and return new version of component*/

//Input --> Restaurant Output --> TopMostRated Restaurant

/**withTopMostRatedLabel is HOC which takes Restaurant component and return a new component with Label on top of it. */

- A Component is a function that returns a piece of JSX.



