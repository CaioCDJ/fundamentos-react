import React from "react";

import "./Card.css";

export default (props) => {
    
    const Cardstyle = {
        backgroundColor: props.color || 'blue',
        borderColor:  props.color || 'blue'
    }

    return (
        <div className="card" style={Cardstyle}> 
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}