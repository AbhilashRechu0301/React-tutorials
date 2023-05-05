import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterslice";

function Counter(){

    const count = useSelector((appState) => appState.counter.value);
    const dispatch = useDispatch();

    const increasefn = ()=>{

        dispatch(increase())
    }
    const decreasefn = ()=>{

        dispatch(decrease())
    }

    return(

        <div>

        <button onClick={increasefn}>Increase</button><br></br><br></br>
        <button onClick={decreasefn}>Decrease</button><br></br><br></br>
        {count};
        </div>
    )
}
export default Counter;