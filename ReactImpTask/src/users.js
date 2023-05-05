function Users(props){

    return(
      <div>
      <h1>Users Component</h1>

      username: {props.Displaydata.username} <br></br><br></br>
      password: {props.Displaydata.password} <br></br><br></br>
      email: {props.Displaydata.email} <br></br><br></br>
      phonenumber: {props.Displaydata.phonenumber} 
      </div>
    )
}
export default Users;

  