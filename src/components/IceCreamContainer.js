import React from 'react';

import { connect } from 'react-redux';
import { buyIce } from './redux/iceCream/ActionIceCream';


const IceCreamContainer = (props) => {
	return ( 
		<div>
			<h2>ice cream count - {props.iceCream} </h2>
			<button onClick={props.buyIce}>buy</button>
		</div>
	 );
}
const mapStateToProps = state =>{
return {iceCream :  state.ice.numOfIce}
}
const mapDispatchToProps = dispatch => {
	return {buyIce : ()=>dispatch(buyIce()) }
}
export default connect(mapStateToProps,mapDispatchToProps)( IceCreamContainer);