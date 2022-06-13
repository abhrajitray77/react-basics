import { Component } from "react";
class ClsEvent extends Component {
    
    handleClick(){
        console.log("class based event handling");
    }

    render() {
        return <div> this is a class based component
            <button onClick={this.handleClick}>Click me!</button>
        </div>
    }
}
export default ClsEvent