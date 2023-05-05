import logo from './logo.svg';
import './App.css';
import VideoList from './VideoList';
import VideoContext from './VideoContext';

function App() {

  const videos = "[{videoID:101,  videoID:102}]";

    

  return (
    <div>

      <h1>App component</h1>
      <VideoContext.Provider value={videos}>
        <VideoList></VideoList>
        </VideoContext.Provider>
      
    </div>
  );
}

export default App;
