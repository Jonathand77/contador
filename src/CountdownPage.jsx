import React, { useEffect, useState } from "react";
import "./countdown.css";

const CountdownPage = () => {
  const targetDate = new Date("2025-12-01T12:00:00").getTime(); // 🎯 Cambia la fecha aquí
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - Date.now();
      setTimeLeft(diff);
      if (diff <= 0) {
        setFinished(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (ms) => {
    if (ms <= 0) return "00:00:00:00";
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return `${String(days).padStart(2, "0")}d : ${String(hours).padStart(2, "0")}h : ${String(minutes).padStart(2, "0")}m : ${String(seconds).padStart(2, "0")}s`;
  };

  return (
    <div className="retro-container">
      {!finished ? (
        <>
          <h1 className="title">🏴‍☠️ Game Countdown 🏴‍☠️</h1>
          <div className="countdown">{formatTime(timeLeft)}</div>
        </>
      ) : (
        <div className="link-container">
          <h1 className="title blink">¡ES HORA, CUMPLEAÑERA!</h1>
          <a href="https://mapa-tesoro-one.vercel.app/" className="retro-button">
            ENTRAR 🏴‍☠️
          </a>
        </div>
      )}
    </div>
  );
};

export default CountdownPage;