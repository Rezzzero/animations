import { motion } from "framer-motion";
import { useState } from "react";

export const FadeIn = () => {
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 100);
  };

  return (
    <div
      className="w-full h-full bg-white flex items-center justify-center text-black"
      onClick={triggerAnimation}
    >
      {animate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={box}
          key="box"
        />
      )}
    </div>
  );
};

const box: React.CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
};
