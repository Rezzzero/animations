import { AnimatePresence, motion, usePresenceData, wrap } from "framer-motion";
import { forwardRef, useState } from "react";

export const Slider = () => {
  const items = [1, 2, 3, 4, 5, 6];
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [direction, setDirection] = useState<1 | -1>(1);

  const color = colors[currentItem];

  const handleClick = (newDirection: 1 | -1) => {
    const nextItem = wrap(1, items.length, currentItem + newDirection);
    setCurrentItem(nextItem);
    setDirection(newDirection);
  };

  return (
    <div className="w-full h-full flex relative justify-center items-center">
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Previous"
        onClick={() => handleClick(-1)}
        className="w-[40px] h-[40px] rounded-full relative left-0 top-1/2 -translate-y-1/2 z-10"
      >
        Left
      </motion.button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide key={currentItem} color={color}></Slide>
      </AnimatePresence>
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        onClick={() => handleClick(1)}
        aria-label="Next"
        className="w-[40px] h-[40px] rounded-full relative right-0 top-1/2 -translate-y-1/2 z-10"
      >
        Right
      </motion.button>
    </div>
  );
};

const Slide = forwardRef(function Slide(
  { color }: { color: string },
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      style={{ backgroundColor: color }}
      className="w-[150px] h-[150px] rounded-md bg-[#0cdcf7]"
    />
  );
});
