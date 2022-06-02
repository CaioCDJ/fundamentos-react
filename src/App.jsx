import React from "react";

// importando css
import './index.css';
import './App.css';

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/Comparametro';
import Fragmento  from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMenbro from "./components/basicos/FamiliaMenbro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";

export default () =>(
        
    <div className="App">
        <h2>Fundamentos React</h2>

        <div className="Cards" >
        <Card titulo="tabela de produtos" color="#1478ad">
            <ListaProdutos></ListaProdutos>
        </Card>
        <Card  titulo="lista de alunos" color="#b7d133">
            <ListaAlunos></ListaAlunos>
        </Card>
        
        <Card titulo ="componente com filhos" color="#63d97d">
            <Familia sobrenome="Ferreira">
                <FamiliaMenbro nome="Pedro"/>
                <FamiliaMenbro nome="Ana"/>
                <FamiliaMenbro nome="Gustavo"/>
            </Familia>
        </Card>
        <Card titulo="Numero aleatorio" color="#FA6900">
            <Aleatorio min={1} max={100}/>    
        </Card>    

        <Card titulo="fagmento" color="grey">
            <Fragmento/>
        </Card>
        
        <Card titulo="Parametro" color="green">
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
