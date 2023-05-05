export default function weatherdata(state =[], action){

console.log("action is called");
console.log("reducer is called");

switch (action.type){
    case 'STORE_WEATHER': return action.payload.data;
    default: return state; 
}
}