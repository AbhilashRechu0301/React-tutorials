export default function detailsreducer(state=[], action){

    console.log("action is called");
    console.log("reducer is called");

    switch (action.type){

        case 'GET_Data': return action.payload.data;

        default: return state;
    }
}