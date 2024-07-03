import React from "react";
import { useState } from "react"

const initGameBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard({activePlayer,setActivePlayer}) {
    const [gameBoardValue,setGameBoardValue] = useState(initGameBoard);

    const onChangeValue = (row : number,col : number) => {
        setGameBoardValue((_curentValue : any) => {
            let cloneData = [..._curentValue];
            let valueCheck  = cloneData?.[row]?.[col];
            if(valueCheck === null){
                cloneData[row][col] = activePlayer;
            }
            return cloneData;
        });
        setActivePlayer((curentValue) => curentValue === "X" ? "O" : "X");
    }
    
    return(
        <ol className="game-board">
            { gameBoardValue.map((row,rowIndex) => {
                return (
                    <li key={"row" + rowIndex}>
                        <ol>
                            {
                                row.map((playerSysbol,colIndex) => {
                                    return(
                                        <li key={"col" + colIndex}>
                                            <button onClick={()=>{onChangeValue(rowIndex,colIndex)}}>
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