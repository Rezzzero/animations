import { AnimatePresence, motion, usePresenceData, wrap } from "framer-motion";
import { forwardRef, useState } from "react";
import ArrowIcon from "../../../../assets/slider-icons/arrow-icon.svg?react";

export const Slider = () => {
  const items = [0, 1, 2, 3, 4];
  const colors = ["red", "orange", "green", "blue", "purple"];
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [xDirection, setXDirection] = useState<1 | -1>(1);
  const [yDirection, setYDirection] = useState<1 | -1>(1);
  const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(
    null
  );

  const color = colors[currentItem];
  const handleClick = (newDirection: "x" | "y", newDelta: 1 | -1) => {
    const nextItem = wrap(0, items.length, currentItem + newDelta);
    setCurrentItem(nextItem);
    if (newDirection === "x") {
      setXDirection(newDelta);
    } else {
      setYDirection(newDelta);
    }
    setActiveDirection(newDirection);
  };

  return (
    <div className="w-full h-full bg-black flex items-center justify-center relative">
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Previous"
        onClick={() => handleClick("x", -1)}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-1/3 top-1/2 -translate-y-1/2 z-10"
      >
        <ArrowIcon className="rotate-270" />
      </motion.button>
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        onClick={() => handleClick("x", 1)}
        aria-label="Next"
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute right-1/3 top-1/2 -translate-y-1/2 z-10"
      >
        <ArrowIcon className="rotate-90" />
      </motion.button>
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Previous"
        onClick={() => handleClick("y", 1)}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-20 z-10"
      >
        <ArrowIcon />
      </motion.button>
      <motion.button
        initial={false}
        animate={{ backgroundColor: color }}
        aria-label="Previous"
        onClick={() => handleClick("y", -1)}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-20 z-10"
      >
        <ArrowIcon className="rotate-180" />
      </motion.button>
      <AnimatePresence
        custom={{ xDirection, yDirection, activeDirection }}
        initial={false}
        mode="popLayout"
      >
        <Slide key={currentItem} color={color}></Slide>
      </AnimatePresence>
    </div>
  );
};

const Slide = forwardRef(function Slide(
  { color }: { color: string },
  ref: React.Ref<HTMLDivElement>
) {
  const { xDirection, yDirection, activeDirection } = usePresenceData();

  const initialX = activeDirection === "x" ? xDirection * -50 : 0;
  const initialY = activeDirection === "y" ? yDirection * 50 : 0;
  const exitX = activeDirection === "x" ? xDirection * 50 : 0;
  const exitY = activeDirection === "y" ? yDirection * -50 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: exitX, y: exitY }}
      style={{ backgroundColor: color }}
      className="w-[100px] h-[100px] rounded-md bg-[#0cdcf7]"
    />
  );
});
