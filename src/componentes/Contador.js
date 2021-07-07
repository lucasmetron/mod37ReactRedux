import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; //hooks que acessa função dispatch e função que possui o estado do objeto
import { incremente, decremente } from '../actions/counterActions'; //importando nossas actions

function Contador(props) {

    const contador = useSelector(state => { return state }); //traz o estado e podemos retornar todos os reducers que hoverem, como so tem o count vai retornar só ele
    const dispatch = useDispatch(); //função para enviar o dispatch

    return (
        <div>
            <div>{contador} Contador</div>
            <button onClick={() => { dispatch(decremente(1)) }}> - </button>
            <button onClick={() => { dispatch(incremente(1)) }}> + </button>
        </div>
    );
}

export default Contador;