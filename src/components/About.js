import UsersClass from "./UsersClass";
import React from "react";


/* const About = () =>{
    return(
        <div>
            <h1>About us</h1>
            <UsersClass name={"Brindha D"}/>
        </div>
    );
} */

class About extends React.Component{
    constructor(){
        super();
        //console.log("Parent constructor");
    }
    
    render(){
        //console.log("Parent render");
        return(
            <div>
                <h1>About us</h1>
                <UsersClass/>
            </div>
        );
    }
}

export default About;