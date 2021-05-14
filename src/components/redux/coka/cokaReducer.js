import ActionCoka from "./ActionCoka";
import { BUY_COKA } from './CokaType';



const initialState = {
	numOfCoka : 30
}
const cokaReducer = (state = initialState , action)=>{

	switch (action.type) {
		case BUY_COKA:{
			return {
				...state ,numOfCoka :state.numOfCoka -1
			}
		}
	
		default:{
			return state
		};
	}

}

export default cokaReducer ;