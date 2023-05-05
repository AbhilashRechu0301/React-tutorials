import React, { Suspense } from 'react';
import { useState } from 'react';

const FirstComponent = React.lazy(()=> import ('./FirstComponent'));
const SecondComponent = React.lazy(()=> import ('./SecondComponent'));
const ThirdComponent = React.lazy(()=> import ('./ThirdComponent'));

function App() {

  const [Counter, setCounter] = useState(0);
 
  return (
    <div className="App">
      <h1>App component</h1>
      {Counter == 5 ?<Suspense fallback={<div>Loading...</div>}><FirstComponent></FirstComponent></Suspense>:""}
      {Counter == 8 ?<Suspense fallback={<div>Loading...</div>}><SecondComponent></SecondComponent></Suspense>:""}

      {Counter == 11 ?<Suspense fallback={<div>Loading...</div>}><ThirdComponent></ThirdComponent></Suspense>:""}

      <button onClick = {()=>{setCounter(Counter + 1);}}>Update</button>
      <h1>{Counter}</h1>
    </div>
  );
}

export default App;
