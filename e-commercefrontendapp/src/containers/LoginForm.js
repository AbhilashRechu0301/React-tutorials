import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../UserSlice";

function Login(){
    const LoginSelector = useSelector((appState)=>appState.isUserLoggedIn.value);
    console.log("LoginSelector", LoginSelector);
    const dispatch = useDispatch();

const [Login, SetLogin] = useState({
username : '',
password : ''
})
const LoginState = (event) =>{
    var name = event.target.name;
    var value = event.target.name;
    SetLogin({...Login, [name]:value});
}
const LoginUser =(event)=>{
    event.preventDefault();
    console.log(LoginUser);
    dispatch(login(Login));
}
    return(

        <div>
           <h1>Login Page</h1>
           <form>
            <input onChange={LoginState} type='text' name = 'username' placeholder='username'></input><br></br><br></br>
            <input onChange={LoginState} type='text' name = 'password' placeholder='password'></input><br></br><br></br>
            <button onClick={LoginUser}>Login Here</button>
           </form>
           The user is {LoginSelector}
        </div>
    )
}
export default Login;