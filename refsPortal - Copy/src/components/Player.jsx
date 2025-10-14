import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const inputPlayerN = useRef(null);
  const [playerNameEntered, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputPlayerN.current.value);
  }
  return (
    <section id="player">
      <h2>
        Welcome {playerNameEntered ? playerNameEntered : "unknown entity"}
      </h2>
      <p>
        <input ref={inputPlayerN} type="text" placeholder="Enter your name" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
