import React, { Component } from 'react';

class PropItUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    render(){
        let age = this.props.age;
        let increaseAge = () =>{
            this.setState({age : this.state.age +=1})
        }
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hColor}</p>
                <button onClick = {increaseAge}>Birthday button for {this.props.firstName}</button>
            <hr />
            </div>
        )
    }
}

export default PropItUp;