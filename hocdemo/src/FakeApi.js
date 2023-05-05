
import HOC3 from "./HOC3";

function FakeApi(props){

        //const Url = "https://fakestoreapi.com/products";


   const getPR = () => props.MakeApiCall(Url);

return (

        <div>
          
         <button onClick = {getPR}>fetchProducts</button>
                <h1>the product length is {props.Products.length}</h1>
         {props.displaydata()}
        </div>


)
}
const Url = "https://fakestoreapi.com/products";
const  HOCFake = HOC3(Url, FakeApi)


export default HOCFake;