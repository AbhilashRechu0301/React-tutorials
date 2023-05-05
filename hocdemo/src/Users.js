import Hoc from "./Hoc";


function Users(props){

    

    return (

        <div>
            <h1 onClick = {() => props.updatecounter()}>The User count is {props.Counter}</h1>
        </div>

    )
}

const HOCUsers = Hoc(25, Users);
export default HOCUsers;