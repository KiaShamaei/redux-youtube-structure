import React from 'react';
import {connect} from "react-redux"

import { buyCake } from './redux/cake/ActionCake';


const CakeContainer = (props) => {
	return ( 
		<div>
			<h2>Cake Container - {props.numOfCakes} </h2>
			<button onClick={props.buyCake}>Buy</button>
		</div>
	 );
}
const  mapStateToProps = state =>{
return {
	numOfCakes : state.numOfCakes
}
}
const mapDispatchToProps = dispatch =>{
	return {buyCake :  ()=>dispatch(buyCake())}
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);