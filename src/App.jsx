import React from "react";

// importando css
import './index.css';
import './App.css';

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/Comparametro';
import Fragmento  from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/aleatorio";
import Card from "./components/layout/Card";

export default () =>(
        
    <div className="App">
        <h2>Fundamentos React</h2>

        <div className="Cards">
        <Card titulo="Numero aleatorio">
            <Aleatorio min={1} max={100}/>    
        </Card>    

        <Card titulo="fagmento">
            <Fragmento/>
        </Card>
        
        <Card titulo="Parametro">
            <ComParametro
                titulo="Aluno"
                aluno="Carlos"
                nota={7.5}
            />
        </Card>
            
        <Card titulo="primeiro">
            <Primeiro></Primeiro>
        </Card>       
        </div> 
    </div>
    );
