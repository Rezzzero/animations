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
      <div
        className={`w-[100px] h-[100px] rounded-xl bg-[#0cdcf7] transform ease-in-out ${
          animate
            ? "opacity-100 translate-y-0 scale-100 duration-1000"
            : "opacity-0 -translate-y-5 scale-90"
        }`}
      />
    </div>
  );
};
