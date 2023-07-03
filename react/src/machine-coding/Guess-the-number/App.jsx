import React, { useEffect, useState } from "react";

import styles from "./guess.module.css";

export default function App() {
  const [l1, setL1] = useState();
  const [disable, setDisable] = useState(false);
  const [num, setNum] = useState(1);
  const [low, setLow] = useState(false);
  const [high, setHigh] = useState(false);
  const [hi, setHi] = useState(false);

  useEffect(() => {
    setL1(Math.round(100 * Math.random()));
  }, []);

  const check = (e) => {
    e.preventDefault();

    if (num < l1) {
      setLow(true);
      setHigh(false);
    } else if (num > l1) {
      setHigh(true);
      setLow(false);
    } else {
      setHi(true);
      setLow(false);
      setHigh(false);
      setDisable(true);
    }
  };

  const restart = () => {
    setL1(Math.round(100 * Math.random()));
    setHi(false);
    setLow(false);
    setHigh(false);
    setDisable(false);
  };

  return (
    <div className={styles.app}>
      <input
        placeholder="Guess-Number"
        onChange={(e) => setNum(e.target.value)}
      />
      <div className={styles.widget}>
        <button onClick={() => restart()}> Start</button>
        <button onClick={(e) => check(e)} disabled={disable}>
          check
        </button>
      </div>
      <div className={styles.text}>
        {low && <p>Your guess is Less than the actual number</p>}
        {high && <p>Your guess is Higher than the actual number</p>}
        {hi && <p>Your guess is right</p>}
      </div>
    </div>
  );
}