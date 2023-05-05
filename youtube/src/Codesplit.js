
import React, { Suspense } from 'react';
import useState from 'react';

const SearchBar = React.lazy(()=> import ('./searchTerm'));
    const Videox = React.lazy(()=> import ('./videos'));
    const Youtube = React.lazy(()=> import ('./youvideo'));

function Lazyload(){
    

    const [Counter, setCounter] = useState(0);

    return(
<div>

{Counter == 5 ?<Suspense fallback={<div>Loading...</div>}><SearchBar></SearchBar></Suspense>:""}
      {Counter == 6 ?<Suspense fallback={<div>Loading...</div>}><Videox></Videox></Suspense>:""}
      {Counter == 8 ?<Suspense fallback={<div>Loading...</div>}><Youtube></Youtube></Suspense>:""}

      

        <button onClick = {()=>{setCounter(Counter + 1);}}>Update</button> 
        <h1>{Counter}</h1>

        <SearchBar onSearchVideo={(datad)=>{searchvideo(datad);}}></SearchBar>
        <Youvideo selectedvideo={videoList.selectedvideo}></Youvideo>
        <VideoList  onSelectvideo = {(data)=>  {updatevideo(data);}} ></VideoList>
</div>
    

    )
}

export default Lazyload;