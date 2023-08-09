import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetData from '../Actions/GetData';
import { useState } from 'react';

function Data(props) {
  const [Products, setProducts] = useState([]);

  const fetchData = () => {
    console.log("fetchData");
    props.GetData( ).then(response => {
      console.log("data", response)
      setProducts(response.payload.data);
    });
     
  }

  const displaydata = () => {
    if (!Products) {
      return null; // or a loading message
    }
    const list = Products.map(product => { 
      return <tr key={product.user}><td>{product.name}</td><td>{product.username}</td><td>{product.email}</td><td>{product.phone}</td><td>{product.website}</td></tr>
      //return <tr key={product.user}><td>{product.title}</td><td>{product.price}</td><td>{product.description}</td><td>{product.image}</td><td>{product.category}</td></tr>
    });
    return list;
  }

  return (
    <div>
      
      <button onClick={fetchData}>fetchData</button> <br></br>
      The length is {props.alldetails.length}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {displaydata()}
        </tbody>
      </table>
    </div>
  )
}

function mapDispatchtoprops(dispatch) {
  return bindActionCreators({ GetData }, dispatch);
}

function mapStateToprops(appState) {
  console.log("appState", appState);
  return { alldetails: appState.details, allproducts: appState.Products }
}

export default connect(mapStateToprops, mapDispatchtoprops)(Data);