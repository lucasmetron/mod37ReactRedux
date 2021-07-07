import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Contador from './componentes/Contador';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import contadorReducer from './reducers/contadorReducer';

function App() {

  const store = createStore(contadorReducer);


  return (

    <div>
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>

  );
}

export default App;
