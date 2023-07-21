import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const countdownDate = new Date("2023-07-23T16:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("EXPIRED");
      } else {
        setCountdown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-xs">{countdown}</span>;
};

export default Countdown;
