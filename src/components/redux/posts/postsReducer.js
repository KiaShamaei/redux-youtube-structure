import * as actions from "./ActionPost"

const initialState = {
	loading : false ,
	posts : [],
	error: ""
}


export const postReducer = (state = initialState , action)=>{
	switch(action.type){
		case actions.Post_Fetch.Request : {
			return {...state , loading : true}
		}
		case actions.Post_Fetch.Success :{
			return{...state , loading : false , posts : action.payload}
		}
		case actions.Post_Fetch.Error : {
			return {...state , loading:false , error : "fetching faild"}
		}
		default: return state ;
	}
}