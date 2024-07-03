import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
function App() {
  const [activePlayer,setActivePlayer] = useState("X");
  return (
    <>
      <header>
        <img src="/game-logo.png" alt="" />
        <h1>Caro App</h1>
      </header>
      <main>
        <div className="game-container">
          <ol className="players highlight-player">
            <Player namePlayer="Long" symbol="X" activePlayer={activePlayer === 'X' ? true : false}/>
            <Player namePlayer="Thương" symbol="O" activePlayer={activePlayer === "O" ? true : false}/>
          </ol>
          <GameBoard activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
        </div>
      </main>
    </>
  )
}

export default App
