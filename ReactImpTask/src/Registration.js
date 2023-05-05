import { useState } from "react";
function Registration(){

    const [LoginForm, SetLoginForm]= useState({
        username:'',
        password:'',
        email:'',
        phonenumber:''
   
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
           const updateemail = (event) =>{
            const value = event.target.value;
            //this.state.username = value; //({password : value});
            SetLoginForm({... LoginForm, email : value});
    
        }   
        const updatephonenumber = (event) =>{
            const value = event.target.value;
            //this.state.username = value; //({password : value});
            SetLoginForm({... LoginForm, phonenumber : value});
    
        }   
           const submit = (event) =>{
               event.preventDefault();
               console.log(LoginForm);
           }     
           
    return(
      <div>
        <h1>Registration Here</h1>
       
       <form>
           <input type="text"  onChange={updateusername} placeholder="user name"></input><br></br><br></br>
           <input type="text" onChange={updatepassword} placeholder="password "></input><br></br><br></br>
           <input type="text" onChange={updateemail} placeholder="email"></input><br></br><br></br>
           <input type="text" onChange={updatephonenumber} placeholder="phone number"></input><br></br><br></br>
           <button onClick={submit}>Login</button>
           
       </form>

      </div>
   
    )
}
export default Registration;