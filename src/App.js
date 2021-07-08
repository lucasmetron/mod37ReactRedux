import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Contador from './componentes/Contador';
import { createStore, combineReducers } from 'redux'; //função createStore
import { Provider } from 'react-redux'; //Funciona como o contextAPI
import contadorReducer from './reducers/contadorReducer'; //Reducer que criamos 

function App() {
  const allReducerss = combineReducers({ counter: contadorReducer })

  const store = createStore(allReducerss);


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
