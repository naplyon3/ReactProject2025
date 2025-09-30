import { useState } from "react";
//this function take three pramenter all coming from app.jsx
/// next we create const useState to chage the default player name to whatever
//also we need to make the playername faild editable this done with the seconde stat and the
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setplayerName] = useState(initialName);
  let editablePlayerName = <span className="player-name"> {playerName}</span>;

  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    //setIsEditing(isEditing ? false:true); below is the short way to switch the value from ture to false or vs
    //setIsEditing(!isEditing); // this change false
    setIsEditing((editting) => !editting); // using this way will garanteed the you will have the latest update of the value

    if (isEditing) {
      onChangeName(symbol, playerName);
    }

    console.log(isEditing);
  }
  function handleChange(event) {
    // console.log(event);
    setplayerName(event.target.value);
  }
  if (isEditing) {
    editablePlayerName = (
      <input onChange={handleChange} type="text" required value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
