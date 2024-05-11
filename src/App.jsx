import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function deriveActivePlayer(turns) {
    let currentPlayer = "X";

    if (turns.length > 0 && turns[0].player == "X") {
      currentPlayer = "O";
    }

    return currentPlayer;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          turns={gameTurns}
          activePlayer={activePlayer}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
