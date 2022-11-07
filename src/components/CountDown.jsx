import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './CountDown.scss';

const CountDown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("Nov 10, 2022 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("Countdown Finished");
      }
    }, 1000);
  }, []);
  return <div className="countdown">
    <h2>Count Down</h2>
    <p>{time}</p>
  </div>;
};

export default CountDown;
