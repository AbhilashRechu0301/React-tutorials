import axios from 'axios';
import {useState} from 'react';


function HOC3(data, Component){

    console.log("data", data);

    const Comp = (data) =>{

       
        const [Products, setProducts] = useState([]);
        
        const MakeApiCall = (Url) => { 
            //console.log(Url)
           axios.get(Url).then((response)=>{
               console.log("response", response)
               setProducts(response.data);
                
            },
           error=>{
               console.log("error", error)
            })
       } 
        //const MakeApiCall = async(Url) => {  
          //  const response = await axios.get(data);
           // setProducts(response.data);
    
           // }
        
       const displaydata=()=>{
        const list = Products.map(product=>{
        
          return  <tr key={product.id}><td>{product.category}</td><td>{product.price}</td><td>{product.title}</td> <td>{product.description}</td><td><img style={{ width: "60px", height: "64px" }} src={product.image}></img></td></tr>
        })
       return list;
        }
        
        
           
            return <Component Products = {Products} MakeApiCall = {MakeApiCall} displaydata = {displaydata}></Component> 
        
        } 
    return Comp;
}
export default HOC3;