
import { FETCH_USER_ERROR, FETCH_USER_REQUESET, FETCH_USER_SUCCESS } from './usersType';

const initialState = {
	loading : false ,
	users : [] , 
	error : "",
}

const usersReducer = (state = initialState , action ) =>{
	switch(action.type){
		case FETCH_USER_REQUESET : {
		 return {
			 ...state, loading : true
		 }
		}
		 case FETCH_USER_SUCCESS : {
			 return {
				  loading : false , users : action.payload , error : ""
			 }
		}
		case FETCH_USER_ERROR : {
			return {
				 loading : false , error : action.payload , users : []
			}
		}
		default: return state;
	}
};

export default usersReducer ;