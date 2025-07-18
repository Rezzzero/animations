import { motion } from "framer-motion";
import { useState } from "react";

export const FadeInOrOut = () => {
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate((prev) => !prev);
  };

  const initial = animate
    ? { opacity: 1, scale: 1, y: 0 }
    : { opacity: 0, scale: 0.9, y: -20 };
  const animateDiv = animate
    ? { opacity: 1, scale: 1, y: 0 }
    : { opacity: 0, scale: 0.9, y: -20 };

  return (
    <div
      className="w-full h-full bg-white flex items-center justify-center text-black"
      onClick={triggerAnimation}
    >
      <motion.div
        initial={initial}
        animate={animateDiv}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={box}
        key="box"
      />
    </div>
  );
};

const box: React.CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
};
