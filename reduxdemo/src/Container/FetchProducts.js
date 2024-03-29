import getProducts from "../Action/Action";
import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function FetchProducts(props) {

const [Products, setProducts] = useState([]);

 const fetchProducts= () => {
    console.log("fetchProducts");
    props.getProducts().then(response=>{
        setProducts(response.payload.data);
    }); 
 };
 const displaydata=()=>{
    const list = Products.map(product=>{
        return  <tr key={product.id}><td>{product.category}</td><td>{product.price}</td><td>{product.title}</td> <td>{product.description}</td><td><img style={{ width: "60px", height: "64px" }} src={product.image}></img></td></tr>
    })
   return list;
   }

    return (

        <div>
            <h1>Products</h1>
            <button onClick ={fetchProducts}>fetch products</button> <br></br>
               
            {props.allproducts.length}
            {<table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>category</th>
                            <th>price</th>
                            <th>title</th>
                            <th>description</th>
                            <th>image</th> 
                        </tr>
                    </thead>

                    <tbody>
                    {displaydata()}
                    </tbody>

    </table>}
        </div>
          
      
     
        
           
    )
}

function mapDispatchToProps(dispatch){

    return new bindActionCreators({getProducts : getProducts}, dispatch)
}

function mapStateToProps(appState){
 console.log("appState", appState);
    return {allproducts: appState.products}
}
export default connect(mapStateToProps, mapDispatchToProps)(FetchProducts);