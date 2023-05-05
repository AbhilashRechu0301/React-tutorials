import { useState } from "react";


function LoginF(){
    
    const [LoginForm, SetLoginForm]= useState({
     username:'',
     password:''

    })
    
        const updateusername = (event) =>{
           const value = event.target.value;
           //this.state.username = value; //({username : value});
           SetLoginForm({... LoginForm, username : value});
    
        }    
        const updatepassword = (event) =>{
            const value = event.target.value;
            //this.state.username = value; //({password : value});
            SetLoginForm({... LoginForm, password : value});
    
        }   
        const submit = (event) =>{
            event.preventDefault();
            console.log(LoginForm);
        }     
        
        return(
          <div>
           
           <form>
               <input type="text" onChange={updateusername} placeholder="user name"></input><br></br><br></br>
               <input type="text" onChange={updatepassword} placeholder="password "></input><br></br><br></br>
               <button onClick={submit}>Login</button> 
           </form>
    
          </div>
       
        )
    }
    
    export default LoginF;