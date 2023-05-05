import {combineReducers} from 'redux';
import weatherdata from './weatherdata';

const rootReducer = combineReducers(
{

    weatherdata: weatherdata
}
)
export default rootReducer;