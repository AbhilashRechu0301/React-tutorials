import React, { useState } from 'react';


function Reference(){

    const firstfield = React.createRef();
    const secondfield = React.createRef();

    const [field, setfield] = useState({

        firstfield:'',
        secondfield:''
    });    

    const Updatefield =(event)=>{
        event.preventDefault();
        var firstfieldvalue = firstfield.current.value;
         secondfield.current.value = firstfieldvalue;
         setfield({firstfield: firstfield.current.value, secondfield: secondfield.current.value})
        //console.log(secondfield.current.value);

    }

    return(
        <div>
     <form>
        <input ref= {firstfield} type="text"  placeholder="first field"></input><br></br><br></br>
        <input ref= {secondfield}  type="text" placeholder="second field"></input><br></br><br></br>
        <button onClick={Updatefield}>Submit</button> <br></br><br></br><br></br><br></br>
     </form>

       {field.firstfield}<br></br><br></br>
       {field.secondfield}
      

        </div>
    )
}
export default Reference;