import { useMemo, useState, useEffect } from "react";
import ArrowIcon from "../../../../assets/slider-icons/arrow-icon.svg?react";
import { SlideContainer } from "./slideContainer";

const STEP = 180;
const buttonStyles =
  "w-[40px] h-[40px] rounded-full flex items-center justify-center absolute z-10";
export const Slide = () => {
  const baseColors = useMemo(
    () => ["red", "orange", "green", "blue", "purple"],
    []
  );
  const colors = useMemo(
    () => [baseColors[baseColors.length - 1], ...baseColors, baseColors[0]],
    [baseColors]
  );
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeDirection, setActiveDirection] = useState<"X" | "Y">("X");

  const slideCount = colors.length - 1;

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slideCount - 1);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 500);
    } else if (currentIndex === slideCount) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 500);
    }
  }, [currentIndex, slideCount]);

  const handleMove = (dir: "X" | "Y", delta: 1 | -1) => {
    if (dir !== activeDirection) setActiveDirection(dir);
    setCurrentIndex((p) => p + delta);
  };

  return (
    <div className="w-full h-full bg-black flex items-center justify-center relative">
      <div className="w-[180px] h-[180px] overflow-hidden relative">
        <SlideContainer
          colors={colors}
          isActive={activeDirection === "X"}
          step={STEP}
          isTransitioning={isTransitioning}
          currentIndex={currentIndex}
          vertical={false}
        />

        <SlideContainer
          colors={colors}
          isActive={activeDirection === "Y"}
          step={STEP}
          isTransitioning={isTransitioning}
          currentIndex={currentIndex}
          vertical={true}
        />
      </div>

      <button
        type="button"
        className={`${buttonStyles} left-1/3 top-1/2 -translate-y-1/2`}
        onClick={() => handleMove("X", 1)}
        style={{ backgroundColor: colors[currentIndex] }}
      >
        <ArrowIcon className="rotate-270" />
      </button>

      <button
        type="button"
        className={`${buttonStyles} right-1/3 top-1/2 -translate-y-1/2`}
        onClick={() => handleMove("X", -1)}
        style={{ backgroundColor: colors[currentIndex] }}
      >
        <ArrowIcon className="rotate-90" />
      </button>

      <button
        type="button"
        onClick={() => handleMove("Y", 1)}
        className={`${buttonStyles} z-10 left-1/2 -translate-x-1/2 top-20`}
        style={{ backgroundColor: colors[currentIndex] }}
      >
        <ArrowIcon />
      </button>

      <button
        type="button"
        onClick={() => handleMove("Y", -1)}
        className={`${buttonStyles} z-10 left-1/2 -translate-x-1/2 bottom-20`}
        style={{ backgroundColor: colors[currentIndex] }}
      >
        <ArrowIcon className="rotate-180" />
      </button>
    </div>
  );
};
