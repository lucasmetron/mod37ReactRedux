import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremente, decremente } from '../actions/counterActions';

function Contador(props) {

    const contador = useSelector(state => { return state });
    const dispatch = useDispatch();

    return (
        <div>
            <div>{contador} Contador</div>
            <button onClick={() => { dispatch(decremente(5)) }}> - </button>
            <button onClick={() => { dispatch(incremente()) }}> + </button>
        </div>
    );
}

export default Contador;