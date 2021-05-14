import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import { buyCake } from './redux';




const HookCakeContainer = () => {
	const numOfCakes = useSelector (state => state.cake.numOfCakes)
	const dispatch = useDispatch()
	return ( 
		<div>
			<h1>num of cakes  - {numOfCakes}</h1>
			<button onClick = {()=>{dispatch(buyCake())}} >buy</button>
		</div>
	 );
}
 
export default HookCakeContainer;