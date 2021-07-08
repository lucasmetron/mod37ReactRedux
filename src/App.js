import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Contador from './componentes/Contador';
import { createStore, combineReducers } from 'redux'; //função createStore, e combineReducers
import { Provider } from 'react-redux'; //Funciona como o contextAPI
import contadorReducer from './reducers/contadorReducer'; //Reducer que criamos 

function App() {

  const allReducers = combineReducers({
    counter: contadorReducer,
  })//Coloque todos os reducers aqui

  const store = createStore(allReducers);


  return (

    <div>
      <Provider store={store}>  {/* Precisamos passar o store no provider para todos componentes terem acesso ao estado */}
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>

  );
}

export default App;
