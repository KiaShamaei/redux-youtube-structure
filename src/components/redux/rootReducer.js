import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer';
import iceReducer from './iceCream/iceReducer';
import cokaReducer from './coka/cokaReducer';

import usersReducer from './users/usersReducer';
import { postReducer } from './posts/postsReducer';



 const rootReducer = combineReducers({
	cake : cakeReducer ,
	ice  : iceReducer , 
	coka : cokaReducer ,
	users : usersReducer,
	posts : postReducer
})

export default rootReducer ;

