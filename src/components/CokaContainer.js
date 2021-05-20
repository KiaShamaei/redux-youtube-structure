import React from 'react';
import {connect} from "react-redux"
import {buyCoka} from './redux/coka/ActionCoka';


const CokaContainer = (props) => {
	return ( 
		<div>
			<h3>coka is  - {props.numOfCoka}</h3>
			<button onClick={props.buyCoka}>buy</button>
		</div>
	 );
}
const mapStateToProps = state =>{
return	{numOfCoka : state.coka.numOfCoka}
}
const mapDispatchToProps = dispatch => {
	return {buyCoka : ()=> dispatch(buyCoka())}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CokaContainer);