import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
        count: 0,
        
        };
    }
    reset(){
        if (this.state.count > 10)
        {
            this.setState({
                count: this.state.count *0
            })
        }
    }
    increment(){
        this.setState({
            count: this.state.count +1
        }) 
    }
    decrement(){
        this.setState({
            count: this.state.count -1
        })
    }

    render(){
        return (
            <div>
            {this.reset()}
            <h3>Count value is: {this.state.count} </h3>
            <button onClick={()=> this.increment()}> +</button>
            <span>   </span>
            <button onClick={()=> this.decrement()}> -</button>
            </div>
        );
    }
}

export default Counter;