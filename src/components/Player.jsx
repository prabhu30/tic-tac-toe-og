import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={`${isActive === true ? "active" : ""}`}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            className="player-name"
            required
            value={playerName}
            onChange={handleChangeName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  );
}
