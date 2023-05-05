import { useEffect, useState } from "react";
import React from "react";

function Fbased(){

    const [count, setcount] = useState({
        counter:0
    });
  useEffect(()=>{

        console.log("useEffect is called");
    }, []);

    return(
        <div>
            <h1>Lifecycle Mechanism</h1>
            <h1 onClick={()=>{setcount({counter: count.counter+1})}}>The counter is {count.counter}</h1>
        </div>
    );
}
export default Fbased;