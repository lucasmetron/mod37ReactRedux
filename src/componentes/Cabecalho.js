import React from 'react';
import { useSelector } from 'react-redux'; //hooks que acessa o estado do redux

function Cabecalho(props) {

    const contador = useSelector(state => { return state.counter }); //traz o estado e podemos retornar todos os reducers que hoverem, como so tem o count vai retornar só ele

    return (
        <div>
            <h3>Contador</h3>
            <div>{contador} Cabeçalho</div>
        </div>
    );
}

export default Cabecalho;