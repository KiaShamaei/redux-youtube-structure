import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { actionBuyCake } from './redux/cake/ActionCake';

export default function CakeWithHooks() {
    const numOfCake = useSelector(state => state.cake.numofCake)
    const dispatch = useDispatch() ;
    return (
        <div>
            <h2>this is cake with hooks of redux</h2>
            <p>{numOfCake}</p>
            <button onClick={()=>dispatch(actionBuyCake())}>buycake</button>
            
        </div>
    )
}
