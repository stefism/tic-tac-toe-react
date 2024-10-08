export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerCol, colIndex) => (
              <li key={colIndex}>
                <button disabled={playerCol != null} onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerCol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
