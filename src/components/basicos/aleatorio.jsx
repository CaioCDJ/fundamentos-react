import React from "react";

export default (props)=>{

    let {min,max} = props;

    let result = Math.floor(Math.random() * (min, max));
    
    return (
        <div>
            <p>
                <strong> Valor minimo: </strong>{min}
            </p>
            <p>
                <strong> Valor Maximo: </strong>{max}
            </p>
            <p>
                <strong> Valor Escolhido: </strong>{result}
            </p>
        </div>
    )
}