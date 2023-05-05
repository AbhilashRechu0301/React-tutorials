import logo from './logo.svg';
import './App.css';
import Movies from './child';

function App() {

  const Movie = [{
    name: "movie1",
    runTime: "120min"
  },
  {
    name: "movie2",
    runTime: "130min"
  },
  {
    name: "movie3",
    runTime: "140min"
  }]
  
  return (
    <div className="App">
      <Movies MoviesList = {Movie}></Movies>
    </div>
  );
}

export default App;
