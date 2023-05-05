import {useState} from 'react';


function Hoc(data, Component){

    console.log("data", data)

    const Comp = () =>{
        
        const [Counter, setCounter] = useState(data);

        const updatecounter = () =>{
            setCounter(Counter + 1)
        
        } 
    
         return <Component Counter = {Counter} updatecounter = {updatecounter}></Component>

    }

    return Comp;
}
export default Hoc;