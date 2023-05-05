import { useState } from "react";
import{useSelector, useDispatch} from 'react-redux';
import { register } from "../UserSlice";


function Registration(){

   const userSelection = useSelector((appState)=> appState.isUserLoggedIn.value);
   const dispatch = useDispatch();
   const [Form, setForm] = useState({
    username:'',
    password:'',
    email:''
    })
    const UpdateState =(event)=>{
      var name = event.target.name;
      var value = event.target.value;
      setForm({...Form, [name]:value})
    }
    const Register =(event)=>{
      event.preventDefault();
      console.log(Form);
      dispatch(register(Form));
     }


    return(

        <div>
           <h1>I am in Registration Page</h1>
           <form>
            <input onChange={UpdateState} type="text" name="username" placeholder="username"></input><br></br><br></br>
            <input onChange={UpdateState}type="text" name="password" placeholder="password"></input><br></br><br></br>
            <input onChange={UpdateState}type="text" name="email" placeholder="email"></input><br></br><br></br>
            <button onClick={Register}>Registration here</button><br></br><br></br>
           </form>
           The data is: {userSelection}
        </div>
    )
}
export default Registration;