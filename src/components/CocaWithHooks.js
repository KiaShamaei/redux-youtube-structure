import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import ActionCoca from './redux/coca/ActionCoca';

export default function CocaWithHooks() {
    const numOfCoca = useSelector(state => state.coca.numOfCoca)
    const dispatch = useDispatch() ;
    return (
        <div>
            <h2>this is from cocaWithHooks</h2>
            <p>{numOfCoca}</p>
            <button onClick={()=>dispatch(ActionCoca())}>buyCoca</button>
            
        </div>
    )
}
