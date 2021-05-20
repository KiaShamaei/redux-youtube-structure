import axios from 'axios';
import { FETCH_USER_ERROR, FETCH_USER_REQUESET, FETCH_USER_SUCCESS } from './usersType';


export const fetchUserRequest =()=>{
	return {
		type : FETCH_USER_REQUESET
	}
}
export const fetchUserSuccess =(users)=>{
	return {
		type : FETCH_USER_SUCCESS ,
		payload : users
	}
}
export const  fetchUsersError = (err) =>{
	return {
		type : FETCH_USER_ERROR,
		payload : err
	}
}

export const fetchUser =()=>{
	return(dispatch)=>{
		
		dispatch(fetchUserRequest())
	 axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res=>{
			const users = res.data ;
			console.log(res)
			dispatch(fetchUserSuccess(users))

		})
		.catch(err=>{
			dispatch(fetchUsersError(err.message))
		})
			}
	
}