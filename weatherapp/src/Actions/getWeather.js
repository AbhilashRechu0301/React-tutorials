import axios from 'axios';

export default function getWeather(lat, long){

    
    var promise = axios.get(`https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=zsIzA1YtdssMrTLMutOCiCDFUVW2U18M`);
//const promise = axios.get(`https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=zsIzA1YtdssMrTLMutOCiCDFUVW2U18M`);
console.log("promise", promise);
    return {
        payload: promise,
        type: 'STORE_WEATHER'
    }
    
}


