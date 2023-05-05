
import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {

  const [users, setusers]= useState(["user1", "user2", "user3"])

  const adduser = () =>{
      const user =+ (users.length + 1);
      setusers(users.concat(user));

  }
  return (
    <div className="App">
      
      <h1>   The count of users is {users.length} in App component</h1>
      <button onClick = {adduser}>Here is Button</button>
    
      <Counter count = {users}></Counter>
      
    </div>
  );
}

export default App;
