import React from "react";

export default props => {

    return (
        <div>
            <span> {props.texto} </span>
            <span><strong> {props.idade} </strong></span>
            <span> {props.bool ? 'Verdadeiro' : 'falso'}! </span>
        </div>
    )
}