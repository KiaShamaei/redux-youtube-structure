import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer';
import iceReducer from './iceCream/iceReducer';
import cokaReducer from './coka/cokaReducer';

 const rootReducer = combineReducers({
	cake : cakeReducer ,
	ice  : iceReducer , 
	coka : cokaReducer
})

export default rootReducer ;

