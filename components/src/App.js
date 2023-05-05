import logo from './logo.svg';
import './App.css';
import Movies from './Class';
import Products from './Function';
import Login from './LoginCbased';
import LoginF from './LoginFbased';



function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Movies></Movies>
      <Products></Products>
      <Login></Login>
      <LoginF></LoginF>
    </div>
  );
}

export default App;
