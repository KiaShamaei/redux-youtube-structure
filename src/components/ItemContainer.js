import React from 'react';


import { connect } from 'react-redux';


const ItemContainer = (props) => {
	return ( 
		<h2>kia is - {props.item}</h2>
	 );
}
const mapStateToProps = (state , ownProps)=>{
	const itemprops = ownProps.cake ? state.cake.numOfCakes : state.ice.numOfIce
	return {
		item  : itemprops
	}
}
 
export default connect(mapStateToProps)(ItemContainer);