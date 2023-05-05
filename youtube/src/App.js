import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import VideoList from './videos';
import Youvideo from './youvideo';
import SearchBar from './searchTerm';
import VideosContext from './VideosContext';
import React, { Suspense } from 'react';





const API_KEY = "AIzaSyDyITLtCiqIEqCB06rmJVHsZfwjBEmctWE"; //---AIzaSyDyITLtCiqIEqCB06rmJVHsZfwjBEmctWE---//const [Counter, setCounter] = useState(0);


const Search = React.lazy(()=> import ('./searchTerm'));
const Videox = React.lazy(()=> import ('./videos'));
const Youtube = React.lazy(()=> import ('./youvideo'));

function App() {
  const [Counter, setCounter] = useState(0);
  
  const [videoList, setVideoList] = useState ({
    
    video: [],
    selectedvideo: null,
    
    
  }) 
 const updatevideo =(video)=>{
  setVideoList({...videoList,  selectedvideo: video});
 }

 //const Lazyload = ()=>setVideoList( videoList.counter + 1); 

 const MakeApicallToYoutube =(searchTerm)=>{
  var API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video&maxResults=5`; 

  axios.get(API_URL).then (
    response => {
       console.log(response.data);
       setVideoList({...videoList, video: response.data.items, selectedvideo: response.data.items[0]}); //
     
},
    error => {
       console.log(error);
}
  )
 }

  useEffect (()=>{
    console.log("use effect is called");
    MakeApicallToYoutube('cricket');

  } , []
  )
  const searchvideo =(term)=>{
    MakeApicallToYoutube(term);
   }
  return (
    <div>
      
      
      

     
      
      
      <VideosContext.Provider value = {videoList.video}>
      <h1>I am in app component</h1>

      {Counter == 4 ?<Suspense fallback={<div>Loading...</div>}><Search onSearchVideo={(datad)=>{searchvideo(datad);}}></Search></Suspense>:""}

      {Counter == 10 ?<Suspense fallback={<div>Loading...</div>}><Videox onSelectvideo = {(data)=>  {updatevideo(data);}}></Videox></Suspense>:""}

      {Counter == 7 ?<Suspense fallback={<div>Loading...</div>}><Youtube selectedvideo={videoList.selectedvideo}></Youtube></Suspense>:""}
      
      <button onClick = {()=>{setCounter(Counter + 1);}}>Update</button> 
        <h1>{Counter}</h1>
      
      
      </VideosContext.Provider>
      
    </div>
  );
}

export default App;
