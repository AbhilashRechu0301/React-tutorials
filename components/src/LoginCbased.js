import React from 'react';
class Login extends React.Component{
    
    constructor(){
        super();
        this.state = {
            username :'',
            password : ''
        }
    }

    updateusername = (event) =>{
       const value = event.target.value;
       //this.state.username = value; //({username : value});
       this.setState({username : value});

    }    
    updatepassword = (event) =>{
        const value = event.target.value;
        //this.state.username = value; //({password : value});
        this.setState({password : value});

    }   
    submit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }     
    render(){
        console.log("render")
    return(
      <div>
       
       <form>
           <input type="text" onChange={this.updateusername} placeholder="user name"></input><br></br><br></br>
           <input type="text" onChange={this.updatepassword} placeholder="password "></input><br></br><br></br>
           <button onClick={this.submit}> Login</button>
           
       </form>

      </div>
   
    )
}
}
export default Login;