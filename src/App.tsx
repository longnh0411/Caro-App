import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver.js";
import {WINNING_COMBINATIONS} from "./rule.js"


const initGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

const defaultUser = {
  'X' : "Long",
  'O' : "Thương"
}

function App() {
  const [historyLog,setHistoryLog] = useState([]);
  const [players,setPlayers] = useState(defaultUser);
  const activePlayer = getActivePlayer(historyLog);
  let gameBoardValue = [...initGameBoard.map(array => [...array])];
  
  for (const turn of historyLog) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoardValue[row][col] = player; 
  }

  function handleSelectButton(rowIndex : number,colIndex : number) {
    setHistoryLog((curentHistory : any[]) => {
      let curentActivePlayer = getActivePlayer(curentHistory);
      const updateHistory : any = [{square : {row : rowIndex,col : colIndex},player : curentActivePlayer},...curentHistory] ?? [];
      return updateHistory;
    });
  }

  function handleChangeName(symbol : string,value : string){
    setPlayers((curentValue) => {
      return({
        ...curentValue,
        [symbol] : value,
      })
    })
  }

  function handleResetGame(){
    setHistoryLog([]);
  }

  const winner = getWinnerPlayer(gameBoardValue,players);
  const hasDraw = historyLog.length === 9 && !winner;

  return (
    <>
      <header>
        <img src="/game-logo.png" alt="" />
        <h1>Caro App</h1>
      </header>
      <main>
        <div className="game-container">
          <ol className="players highlight-player">
            <Player handleChangeName={handleChangeName} namePlayer={players["X"]} symbol="X" activePlayer={activePlayer === 'X' ? true : false} />
            <Player handleChangeName={handleChangeName} namePlayer={players["O"]} symbol="O" activePlayer={activePlayer === "O" ? true : false} />
          </ol>
          {(winner || hasDraw === true) && <GameOver winner={winner} handleResetGame={handleResetGame}/>}
          <GameBoard gameBoardValue={gameBoardValue} handleSelectButton={handleSelectButton} />
        </div>
        <Log logs={historyLog} />
      </main>
    </>
  )
}

function getActivePlayer(historyLog : any[]){
  let curentActivePlayer : string = "X";
  if(historyLog.length > 0 && historyLog[0].player === "X"){
    curentActivePlayer = "O";
  }
  return curentActivePlayer;
}

function getWinnerPlayer(boardGame: any,player : any){
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = boardGame[combination[0].row][combination[0].column];
    const secondSquareSymbol = boardGame[combination[1].row][combination[1].column];
    const thirdSquareSymbol = boardGame[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = player[firstSquareSymbol];
    }
  }
  return winner;
}

export default App
