
import Hoc from "./Hoc";


function Products(props){

    

    return (

        <div>
            <h1 onClick = {() => props.updatecounter()}>The Product count is {props.Counter}</h1>
        </div>

    )
}

const HOCProducts = Hoc(90, Products);
export default HOCProducts;