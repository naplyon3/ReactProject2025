import GameBoard from "./Components/GameBoard.jsx";
import Player from "./Components/Player.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "../winning-combinations.js";
import Log from "./Components/Log.jsx";
import GameOver from "./Components/GameOver.jsx";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function driveActivePlayer(gamerTurns) {
  let currentPlayer = "X";
  if (gamerTurns.length > 0 && gamerTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

/////
function App() {
  const [players, setPlayers] = useState({
    X: "player 1",
    O: "Player 2",
  });
  const [gamerTurns, setGameTurns] = useState([]);
  const activePlayer = driveActivePlayer(gamerTurns);
  ////

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gamerTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];

    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  const hasDraw = gamerTurns.length === 9 && !winner;

  // const [activePlayer, setActivePlayer] = useState("X"); //this use of state will hold the active player and the symbol

  //below function will switch player symbol everytime you click
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = driveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }
  //we crete two player with the default name and symbol and we add isactie to compare with the current palyer
  //GameBoard component we have to pass active player after we call handleSelectedSquare function and determaind which player is the currnet player
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={"Player 1"}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={"Player 2"}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gamerTurns} />
    </main>
  );
}

export default App;
