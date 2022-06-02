import React from "react";
import produtos from "../../data/produtos";
import './ListaProdutos.css'

export default props=>{

    const lines = produtos.map((produto, i)=>{
        return (
            <tr key={produto.id} 
                className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <th>{produto.id}</th>
                <th>{produto.nome}</th>
                <th>{produto.preco}</th>
            </tr>
        )
    })

    return(
        <table>
           <thead style={{backgroundColor:'#1478ad'}}>
           <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
           </thead>
           <tbody>
            {lines}

           </tbody>
        </table>
    );
}