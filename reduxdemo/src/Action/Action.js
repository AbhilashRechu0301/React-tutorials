import axios from 'axios';
export default function getProducts(){    
    var Promise = axios.get("https://fakestoreapi.com/products");
    console.log("Promise", Promise)
    return {

        payload: Promise,
        type: "GET_Products"
    }

       
    


}
