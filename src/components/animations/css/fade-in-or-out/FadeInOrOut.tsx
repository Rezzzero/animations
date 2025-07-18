import { useState } from "react";
import "./FadeInOrOut.css";

export const FadeInOrOut = () => {
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <div className="fade-container" onClick={triggerAnimation}>
      <div className={`fade-item ${animate ? "fade-in" : "fade-out"}`} />
    </div>
  );
};
