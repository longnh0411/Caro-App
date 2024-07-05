import React from "react";
import { useState } from "react";

export default function Player({handleChangeName,namePlayer, symbol, activePlayer}) {
    let [isEdit, setIsEdit] = useState(false);
    let [name, setName] = useState(namePlayer);

    const handleClickEdit = () => {
        setIsEdit((value) => !value);
        if(isEdit){
            handleChangeName(symbol,name)
        }
    };

    return (
        <li className={activePlayer === true ? 'active' : undefined}>
            <span className="player">
                {isEdit === false ? (
                    <span className="player-name">{name}</span>
                ) : (
                    <input
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleClickEdit()}>
                {isEdit === true ? "Lưu" : "Sửa"}
            </button>
        </li>
    );
}
