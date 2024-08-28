import React from "react";

class CounterClass extends React.Component {
    constructor(){
        super();
        this.Increment = this.Increment.bind(this);
        this.state = {
            number:0
       }
    }
Increment(){
    this.setState({
      number:this.state.number +1
    
    });

}


    render(){
        return (
            <div>
            <h1>Counter = {this.state.number}</h1>
            <button onClick={this.Increment}>Increment</button>
            </div>
        )
    }
}

export default CounterClass;
