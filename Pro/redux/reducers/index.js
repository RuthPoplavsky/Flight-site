import { combineReducers } from "redux";
import productReducer from './pruductReducer';

const allReducers = combineReducers({
   
    productReducer : productReducer
});
export default allReducers;