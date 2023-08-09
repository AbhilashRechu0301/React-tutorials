
import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [Products, setProducts] = useState([]);

  //const fetchData = () => {
  //  console.log("fetchData");     
  //MakeApi();   
 // }
  const MakeApi = () => axios.get("https://fakestoreapi.com/products").then((response)=>{
    console.log("response", response)
    setProducts(response.data);
  },
  error=>{
    console.log("error", error)
  }
  )

  const displaydata = () => {
   
     const list = Products.map(product => {
      //return <tr key={product.user}><td>{product.name}</td><td>{product.username}</td><td>{product.email}</td><td>{product.phone}</td><td>{product.website}</td></tr>
      return <tr key={product.user}><td>{product.title}</td><td>{product.price}</td><td>{product.description}</td><td>{product.image}</td><td>{product.category}</td></tr>
      //https://jsonplaceholder.typicode.com/users
    });
    return list;
  }

  return (
    <div className="App">
      
      <center><button onClick = {MakeApi}>fetch data</button></center>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>image</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {displaydata()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
