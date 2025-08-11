import { useMemo, useState, useEffect } from "react";
import ArrowIcon from "../../../../assets/slider-icons/arrow-icon.svg?react";

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
      }, 200);
    } else if (currentIndex === slideCount) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 200);
    }
  }, [currentIndex, slideCount]);

  const handleMove = (dir: "X" | "Y", delta: 1 | -1) => {
    if (dir !== activeDirection) setActiveDirection(dir);
    setCurrentIndex((p) => p + delta);
  };

  return (
    <div className="w-full h-full bg-black flex items-center justify-center relative">
      <div className="w-[180px] h-[180px] overflow-hidden relative">
        <div
          className={`absolute inset-0 ${
            activeDirection === "X"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`slider flex flex-row gap-[80px] absolute left-10 top-10 ${
              isTransitioning
                ? "transition-transform duration-200 ease-out"
                : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * STEP}px)` }}
          >
            {colors.map((c, i) => (
              <div
                key={i}
                className="w-[100px] h-[100px] rounded-md"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div
          className={`absolute inset-0 ${
            activeDirection === "Y"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`slider flex flex-col gap-[80px] absolute left-10 top-10 ${
              isTransitioning
                ? "transition-transform duration-200 ease-out"
                : ""
            }`}
            style={{ transform: `translateY(-${currentIndex * STEP}px)` }}
          >
            {colors.map((c, i) => (
              <div
                key={i}
                className="w-[100px] h-[100px] rounded-md"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`${buttonStyles} left-1/3 top-1/2 -translate-y-1/2`}
        onClick={() => handleMove("X", -1)}
        style={{ backgroundColor: colors[currentIndex] }}
      >
        <ArrowIcon className="rotate-270" />
      </button>

      <button
        type="button"
        className={`${buttonStyles} right-1/3 top-1/2 -translate-y-1/2`}
        onClick={() => handleMove("X", 1)}
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
