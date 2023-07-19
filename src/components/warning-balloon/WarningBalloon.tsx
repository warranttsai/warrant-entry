import { useState, useEffect } from "react";
import "./WarningBalloon.css";

interface WarningBalloonProps {
  message: string;
}

const WarningBalloon = ({ message }: WarningBalloonProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Set the duration for the balloon to be visible (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="warning-balloon">
      <span className="warning-text">{message}</span>
    </div>
  ) : null;
};

export default WarningBalloon;
