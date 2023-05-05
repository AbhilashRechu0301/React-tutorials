import logo from './logo.svg';
import './App.css';
//import Navbar from './componentV6/Navbar';
import NavbarV5 from './componentV5/NavbarV5';

function App() {
  return (
    <div className="App">
       {/*<Navbar></Navbar>//"^6.10.0" */}
      <NavbarV5></NavbarV5>
    </div>
  );
}

export default App;
