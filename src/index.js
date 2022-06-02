// pacotes padrao React
import ReactDOM  from "react-dom";
import React from 'react';

// importando css
import './index.css';

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/Comparametro';
import Fragmento  from './components/basicos/Fragmento';

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro
            titulo="TITULU"
            aluno="Sidorfi"
            nota={-11.5}
        /  >
            <Fragmento/>
    </div>,
    document.getElementById('root'));    