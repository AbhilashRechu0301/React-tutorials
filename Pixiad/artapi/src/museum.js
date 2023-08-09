import axios from 'axios';
import { useEffect, useState } from 'react';

function Museum(){
    const [Object, setObject] = useState([]);

    useEffect =()=>{
    axios.get('https://www.rijksmuseum.nl/api/nl/collection?key=2esrTh6M&involvedMaker=Rembrandt+van+Rijn').then(
        response=>{
            console.log("response", response)
        },
        error => {
            console.log(error)
        }
     ),[]
    }
    return(
        <div>
        <h1> I am in Museum Page</h1>
     
   
        </div>
    )
}
export default Museum;