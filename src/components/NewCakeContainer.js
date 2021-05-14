
import React , {useState}from 'react';
import {connect} from "react-redux"

import { buyCake } from './redux/cake/ActionCake';


const NewCakeContainer = (props) => {
	const [number , setNumber] = useState (1)
	return ( 
		<div>
			<h2>Cake Container - {props.numOfCakes} </h2>
			<input type="text" onChange={e=>setNumber(e.target.value)} value={number} /> 
			<button onClick={()=>props.buyCake(number)}>Buy</button>
		</div>
	 );
}
const  mapStateToProps = state =>{
return {
	numOfCakes : state.cake.numOfCakes
}
}
const mapDispatchToProps = dispatch =>{
	return {buyCake :  (number)=>dispatch(buyCake(number))}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);