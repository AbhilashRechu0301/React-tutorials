import Change from "./changepass";

function User(props){

    //const change ={
       // password: "789123"
    //} 
    return(
        <div>
            <h1>Token Component</h1>
            {props.TokenList.username} &nbsp;&nbsp;&nbsp;&nbsp;
            {props.TokenList.password}
            
            
            <Change Changepass={props.TokenList}></Change>
            

        </div>
       
    
    )
}
export default User;