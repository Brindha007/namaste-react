import React from "react";
class UsersClass extends React.Component{
     constructor(props){
        super(props);
       // console.log(props);
        this.state ={
            count : 7
        };

       // console.log(this.props.name+"Child Constructor");
    } 
   
    render(){
       // console.log(this.props.name+"Child render");
        return(
            <div className="user-card">
                <h2>{this.props.name}</h2>
                
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                    });
                }}>Increment</button>
                <h3>Location : Trichy</h3>
                <h4>React js MERN Expert</h4>

            </div>
        );
    }
}

export default UsersClass;