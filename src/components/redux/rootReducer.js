import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer';
import iceReducer from './iceCream/iceReducer';
import cokaReducer from './coka/cokaReducer';

import usersReducer from './users/usersReducer';



 const rootReducer = combineReducers({
	cake : cakeReducer ,
	ice  : iceReducer , 
	coka : cokaReducer ,
	users : usersReducer
})

export default rootReducer ;

