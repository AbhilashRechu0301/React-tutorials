import logo from './logo.svg';
import './App.css';
import User from './usercomponent';


function App() {

  const Token = {
    username:"Abhi",
    password:"123456"
  }
    
  return (
    <div className="App">
      <h1>App component</h1>
      <User TokenList={Token}></User>
      
    </div>
  );
}

export default App;
