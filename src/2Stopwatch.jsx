import React, { useState, useEffect } from "react";
const StopWatchApp = () => {
  const [timeStemp, setTimeStamp] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeStamp(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let timeId;
    if (isRunning) {
      timeId = setInterval(() => {
        setTimeStamp((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timeId);
  }, [isRunning]);

  return (
    <div className="box">
      <p>😍 Stopwatch App Time: {timeStemp} seconds</p>
      <button onClick={handleStart} disabled={isRunning}>start</button>
      <button onClick={handleStop} disabled={!isRunning}>stop</button>
      <button onClick={handleReset} disabled={timeStemp <= 0}>reset</button>
    </div>
  );
};
export default StopWatchApp;
