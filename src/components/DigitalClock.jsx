import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./DigitalClock.scss";

const DigitalClock = () => {
  const [clockState, setClockstate] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockstate(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <p>{clockState}</p>
    </div>
  );
};

export default DigitalClock;
