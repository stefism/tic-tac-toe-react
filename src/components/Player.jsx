import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function setEditing() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing); => прави същото като горното
    setIsEditing((editing) => !editing); // Правилно е стейта да се ъпдейтва така, с функция, вместо както е горе.
    // Това ни гарантира, че Реакт ще вземе правилно, последното състояние на стейта и ще го промени към новото.
    // Прави се когато новото състояние на стейта, трябва да е базирано на предишното.
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input className="player-name" value={playerName} onChange={handleChangeName} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={setEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
