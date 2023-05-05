import Hoc from "./Hoc";


function Sellers(props){

    

    return (

        <div>
            <h1 onClick = {() => props.updatecounter()}>The Seller count is {props.Counter}</h1>
        </div>

    )
}

const HOCSellers = Hoc(200, Sellers);
export default HOCSellers;