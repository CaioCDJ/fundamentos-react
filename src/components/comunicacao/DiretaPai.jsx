
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {

    return (
        <div>
            <DiretaFilho texto="Gabriel "
                idade={20}
                bool={true} />
            <DiretaFilho texto="Jinior"
                idade={15}
                bool={false} />
        </div>
    )
}