import { useState } from "react";

export const FadeInOrOut = () => {
  const [animate, setAnimate] = useState(false);

  const triggerAnimation = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <div
      className="w-full h-full bg-white flex items-center justify-center text-black"
      onClick={triggerAnimation}
    >
      <div
        className={`w-[100px] h-[100px] rounded-xl bg-[#0cdcf7] transform ease-in-out ${
          animate
            ? "bg-[#0cdcf7] animate-fade-in"
            : "bg-transparent animate-fade-out"
        }`}
      />
    </div>
  );
};
