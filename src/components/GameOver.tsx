import React from "react";

export default function GameOver({winner,handleResetGame}) {
    return(
        <div className="game-over">
            <h2>Trò chơi kết thúc</h2>
            { winner && <p>Người chiến thắng là : {winner} </p>}
            { !winner && <p>Kết quả hòa</p>}
            <p>
                <button onClick={handleResetGame}>Chơi lại</button>
            </p>
        </div>
    )
}