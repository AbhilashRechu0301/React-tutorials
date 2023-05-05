import axios from 'axios';
import {useState} from 'react';
export default function Api (){

const [Products, setProducts] = useState([]);
const MakeApi = () => { 
    axios.get("https://fakestoreapi.com/products").then((response)=>{
        console.log("response", response)
        setProducts(response.data);
        
    },
    error=>{
        console.log("error", error)
    })
} 

const displaydata=()=>{
const list = Products.map(product=>{

    return  <tr key={product.id}><td>{product.category}</td><td>{product.price}</td><td>{product.title}</td> <td>{product.description}</td><td><img style={{ width: "60px", height: "64px" }} src={product.image}></img></td></tr>
})
return list;
}


   
    return (
      <div>
         <h1>Products</h1>
         <button onClick ={MakeApi}>GetData</button><br></br><br></br>

         The length is {Products.length}
        
         
         <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>category</th>
                            <th>Price</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th >Image</th> 
                        </tr>
                    </thead>

                    <tbody>
                    {displaydata()}
                    </tbody>

                </table>
    
      </div>
       
       
    )
}