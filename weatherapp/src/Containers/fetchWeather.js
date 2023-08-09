import { useState } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import getWeather from '../Actions/getWeather';



function FetchWeather(props){

    const [Coords, setCoords] = useState({

        lat:'',
        long:''
    });
    const updatecoords = (event)=>{

        setCoords({...Coords, [event.target.name]: event.target.value});
    } 

    

    const FetchData = (event) =>{
        event.preventDefault();
        //console.log("FetchData");
        props.getWeather(Coords.lat, Coords.long);
    }
    
    


    return(

        <div>
            <h1>WeatherData</h1>
            <form>
            <input onChange = {updatecoords} type = 'text' name = 'lat' placeholder = 'latitude'></input><br></br><br></br><br></br>
            <input onChange = {updatecoords} type = 'text' name = 'long' placeholder = 'longitude'></input><br></br><br></br><br></br>
            <button onClick={FetchData}>FetchData</button>
            </form>
            
           
        </div>
    )
}

//export default connect((appState) => {
   // console.log("appState", appState);
    //return { weatherdatainfo: appState.weatherdata }
//},
    //(dispatch) => {
       // return new bindActionCreators({getWeather: getWeather}, dispatch)
   // }
//)(FetchWeather);

function mapDispatchToprops(dispatch){

    return new bindActionCreators({getWeather: getWeather}, dispatch);
}

function mapStateToprops(appState){
    console.log("appState", appState);

    return {weatherdatainfo: appState.weatherdata}
}

export default connect(mapStateToprops, mapDispatchToprops)(FetchWeather);