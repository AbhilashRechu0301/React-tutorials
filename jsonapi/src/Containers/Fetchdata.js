import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import GetData from '../Actions/GetData';
import {useState} from 'react';

function FetchData(props){

    const [Products, setProducts] = useState([]);

    const fetchData= () => {
        console.log("fetchData");
        props.GetData().then(response=>{
            setProducts(response.data);
        });
        //{setProducts({Products})}   
     }

     const displaydata=()=>{
        const list = Products.map(product=>{
        
           return  <tr key={product.users}><td>{product.name}</td><td>{product.username}</td><td>{product.email}</td> <td>{product.phone}</td><td>{product.website}</td></tr>
        })
        return list;
        }
        
   return(

    <div>

    <h1>Data</h1>
    <button onClick ={fetchData}>fetchData</button> <br></br>
     The length is {props.alldetails.length}

     <table className="table table-striped" >
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

function mapDispatchtoprops(dispatch){

    return new bindActionCreators({GetData: GetData}, dispatch)
}
function mapStateToprops(appState){
console.log("appState", appState);
    return {alldetails: appState.details, allproducts: appState.Products}
}
export default connect(mapStateToprops, mapDispatchtoprops)(FetchData);
