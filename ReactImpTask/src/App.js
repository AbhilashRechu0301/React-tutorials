import logo from './logo.svg';
import './App.css';
import Test from './Test';
import { useState } from 'react';
import Users from './users';



function App() {
  const [Display, SetDisplay] = useState([]);
  const getRegistrationForm = (data)=>{
    console.log("coming from the testJS", data); 
  SetDisplay(data); 
} 
  return (
    <div className="App">
      <h1>App component</h1>
      username: {Display.username} <br></br>
      password:  {Display.password} <br></br>
      email:     {Display.email} <br></br>
      phonenumber: {Display.phonenumber}    <br></br>
      <Test onSetRegistrationForm={(Form)=>
         getRegistrationForm(Form)
      }></Test>
      <Users Displaydata={Display}></Users>
    </div>
  );
}

export default App;
