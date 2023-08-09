import { useState } from "react";
import{useSelector, useDispatch} from 'react-redux';
import { register } from "../UserSlice";



function Registration(){

  const appState = useSelector((appState) => appState);
  //console.log('UserSelection', UserSelection);
   //var appState = useSelector(appState=> appState);
   console.log("appState", appState);

   if (appState.isUserLoggedIn.value !== "notLoggedIn") {
    appState.isUserLoggedIn.then(data => {
        console.log("data", data);
        console.log(data.value);
       appState.isUserLoggedIn.value = data.value
    }
   );

}
   const dispatch = useDispatch();
   const [Form, setForm] = useState({
    username:'',
    password:'',
    email:'',
    role : 'customer'
    })
    const UpdateState =(event)=>{
      var name = event.target.name;
      var value = event.target.value;
      setForm({...Form, [name]:value})
    }
    const RegisterUser = (event)=>{
      event.preventDefault();
      console.log(Form);
       dispatch(register(Form));
     }


    return(

        <div>
           <h1>Register Here</h1>
           <form>
            <input onChange={UpdateState} type="text" name="username" placeholder="username"></input><br></br><br></br>
            <input onChange={UpdateState}type="text" name="password" placeholder="password"></input><br></br><br></br>
            <input onChange={UpdateState}type="text" name="email" placeholder="email"></input><br></br><br></br>
            <button onClick={RegisterUser}>Register</button><br></br><br></br>
           </form>
          The data is {appState}
        </div>
    )
}
export default Registration;