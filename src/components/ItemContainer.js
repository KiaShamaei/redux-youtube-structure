import React from 'react';


import { connect } from 'react-redux';

import { buyCoka } from './redux/coka/ActionCoka';
import { buyCake } from './redux/cake/ActionCake';

const ItemContainer = (props) => {
	return (
		<div>
	
		<h2>kia is - {props.item}</h2>
		<button onClick={props.itemBuy}>Buy Item</button>
				
		</div> 
	 );
}
const mapStateToProps = (state , ownProps)=>{
	const itemprops = ownProps.cake ? state.cake.numOfCakes : state.coka.numOfCoka
	return {
		item  : itemprops
	}
}
const mapDispatchToProps = (dispatch , ownProps)=>{
	const itemBuy = ownProps.cake ? 
	()=> dispatch(buyCake()) :
	()=> dispatch(buyCoka())
	return {
	 itemBuy :itemBuy
	}
}
 
export default connect(mapStateToProps ,mapDispatchToProps )(ItemContainer);