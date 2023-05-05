import React from 'react';

class Counter extends React.Component{
    constructor(){
        console.log("constructor is called"); //1st Constructor will be called
        super();

        this.state={
            counter:0
        }
    }

     updateState = () => {
        this.setState({counter:this.state.counter + 1})
    }
    forceupdate = () => {
        this.forceUpdate(()=>{
            console.log("force update is called");
        });
    }
    
    componentDidMount() {
        console.log("component did mount is called"); //3rd Component did mount will be called
    }
    componentDidUpdate() {
        console.log("component did update is called"); // 2nd Component did update will be called
    }
    render(){
        console.log("render is called"); //2nd render will be called: // In component did update phase render is called 1st
        return(
            <div>
                <h1>counter component</h1>
                <h1 onClick = {this.updateState}> The counter count is {this.state.counter} </h1>
                <h1>The count of users in counter comp is {this.props.count.length}</h1>
                <h2 onClick = {this.forceupdate}> Force Update</h2>

            </div>
        )
    }
}
export default Counter;