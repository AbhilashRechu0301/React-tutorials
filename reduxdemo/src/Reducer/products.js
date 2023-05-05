export default function ( state = [], action){
    console.log("action is called")
   console.log("reducer");

//if (action.payload){

    
    switch (action.type){
        case 'GET_Products': return action.payload.data;

        default : return state;


}
   
}

  

