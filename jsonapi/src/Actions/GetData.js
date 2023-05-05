import axios from 'axios';

export default function GetData() {

    
    const promise = axios.get("https://jsonplaceholder.typicode.com/users")

    console.log("promise", promise);

    return (

    {
        payload: promise,

        type: 'GET_Data'

    }
    )


}
