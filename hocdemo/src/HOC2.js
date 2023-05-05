import axios from 'axios';
import {useState} from 'react';

function Hoc(data, Component){

    console.log("data", data);

    const Comp = (data) =>{
        
        const [Data, setData] = useState([]); //"https://fakestoreapi.com/products"

        //const Url = "https://fakestoreapi.com/products"
        const MakeApiCall = async(Url) => {  
        const response = await axios.get(data);
        setData(response.data);

        }

        return <Component Data = {Data} MakeApiCall = {MakeApiCall}></Component>
        } 
    return Comp;
}
export default Hoc;