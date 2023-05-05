import {combineReducers} from 'redux';
import detailsreducer from './Details';

const rootReducer = combineReducers(
    {

    details: detailsreducer
    }
)

export default rootReducer;