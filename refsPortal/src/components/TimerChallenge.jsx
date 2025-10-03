import { use } from "react";
import { useState } from "react";
import { useRef } from "react";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStert() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop(timer) {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStert}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        Time is running.../Timer Inactive{" "}
      </p>
    </section>
  );
}
