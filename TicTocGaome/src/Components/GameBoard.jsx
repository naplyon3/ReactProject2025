///We Create array with three row and three col

export default function GameBoard({ onSelectSquare, board }) {
  // let GameBoard = initialGameBoard;
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   GameBoard[row][col] = player;
  // }
  // const [GameBoard, setGameBoard] = useState(initialGameBoard); ////we will create use state to make change when we select any squar

  // ////we create funciton that will have rowIndex and colIndex this two is the square location and set the value to x as it show below
  // function handleSelectedSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  ///
  return (
    <ol id="game-board">
      {board.map(
        (
          row,
          rowIndex //this will map for each row and create new array with temp index rowIndex and save it row
        ) => (
          <li key={rowIndex}>
            <ol>
              {row.map(
                (
                  playerSymbol,
                  colIndex //now we are going to loop on each row and get the colums  and create button
                ) => (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                )
              )}
            </ol>
          </li>
        )
      )}
    </ol>
  ); //return closing order list
}
