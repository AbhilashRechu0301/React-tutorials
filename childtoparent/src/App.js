import logo from './logo.svg';
import './App.css';
import Movies from './toparent';
import{useState} from 'react';
function App() {
  const [allMovies, setallMovies] = useState([]);
 
  const RenderList= ()=>{

    const List = allMovies.map(function(film){

      return <li key={film.name}> {film.name} {film.runTime} </li>

    })
    return List;
  }
  
  
  const getMovies = (movies)=>{
    console.log(movies);
    if(allMovies==0){
      setallMovies(movies);
    }
  
    
  }

  return (
    <div className="App">
      
      <Movies onSetMovies={
        (M)=> getMovies(M)
      }></Movies>

     {allMovies.length > 0 ? RenderList(): "Movies not available"}
      
    </div>
  );
}

export default App;
