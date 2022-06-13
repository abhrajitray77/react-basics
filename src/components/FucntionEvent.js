function FunctionEvent(){
    let handleClick =()=>{
        console.log("button has been clicked");
    };
    return(
        <div>
            Functional Component
            <button onClick={handleClick}>click here!</button>
        </div>
    );
}
export default FunctionEvent;