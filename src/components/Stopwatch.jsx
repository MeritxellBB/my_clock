import React, { useState, useEffect } from "react";
import './Stopwatch.css'

const Stopwatch = () => {
    const [time, setTime] = useState (0);
    const [timerOn, setTimerOn] = useState (false);
    
    useEffect(() => {
        let interval = null;
    
        if (timerOn) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);

    }, [timerOn]);

    return (
        <div className="stopwatch">
    <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>¡Dale!</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>¡Para!</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>¡Otra vez!</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>has tardado</button>
        )}
      </div>
    </div>
    );
};

export default Stopwatch;