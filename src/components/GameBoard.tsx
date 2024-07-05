import React from "react";


export default function GameBoard({gameBoardValue,handleSelectButton}) {
    

    return(
        <ol className="game-board">
            { gameBoardValue.map((row : any,rowIndex : number) => {
                return (
                    <li key={"row" + rowIndex}>
                        <ol>
                            {
                                row.map((playerSysbol : any,colIndex : number) => {
                                    return(
                                        <li key={"col" + colIndex}>
                                            <button disabled={playerSysbol ? true : false} onClick={()=>{handleSelectButton(rowIndex,colIndex)}}>
                                                {playerSysbol}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </li>
                )
            })}
        </ol>
    )
}