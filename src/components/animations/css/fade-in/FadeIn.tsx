import { useState } from "react";
import "./FadeIn.css";

export const FadeIn = () => {
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  return (
    <div className="fade-in-container" onClick={triggerAnimation}>
      <div className={animate ? "fade-in-item" : ""}>Fade In Item</div>
    </div>
  );
};
