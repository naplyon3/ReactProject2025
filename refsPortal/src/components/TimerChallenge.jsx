import { use } from "react";
import { useState } from "react";
import { useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStert() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop(timer) {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      )}
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStert}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          Time is running.../Timer Inactive{" "}
        </p>
      </section>
    </>
  );
}
