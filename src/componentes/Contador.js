import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; //hooks que acessa função dispatch e função que possui o estado do objeto
import { increment, decrement } from '../actions/countadorActions'; //importando nossas actions

function Contador(props) {

    const contador = useSelector(state => { return state.counter }); ////De todos os estados dentro de ‘state’ selecionamos apenas o counter.
    const dispatch = useDispatch(); //função para enviar o dispatch

    return (
        <div>
            <div>{contador} Contador</div>
            <button onClick={() => { dispatch(decrement(1)) }}> - </button>
            <button onClick={() => { dispatch(increment(1)) }}> + </button>
        </div>
    );
}

export default Contador;