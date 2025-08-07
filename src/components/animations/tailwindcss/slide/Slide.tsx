import { useEffect, useMemo, useRef, useState } from "react";
import ArrowIcon from "../../../../assets/slider-icons/arrow-icon.svg?react";

export const Slide = () => {
  const baseColors = useMemo(
    () => ["red", "orange", "green", "blue", "purple"],
    []
  );
  const colors = useMemo(() => {
    return [baseColors[baseColors.length - 1], ...baseColors, baseColors[0]];
  }, [baseColors]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const activeDirection = useRef<"X" | "Y">(null);

  const color = colors[currentIndex];

  const slideCount = colors.length - 1;
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(colors.length - 2);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 200);
    }

    if (currentIndex === slideCount) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 200);
    }
  }, [currentIndex, slideCount, colors]);

  const handleXNextClick = () => {
    setCurrentIndex((prev) => prev + 1);
    activeDirection.current = "X";
  };

  const handleYNextClick = () => {
    setCurrentIndex((prev) => prev + 1);
    activeDirection.current = "Y";
  };

  const handleXPrevClick = () => {
    setCurrentIndex((prev) => prev - 1);
    activeDirection.current = "X";
  };

  const handleYPrevClick = () => {
    setCurrentIndex((prev) => prev - 1);
    activeDirection.current = "Y";
  };
  const isHorizontal = activeDirection.current === "X";

  return (
    <div className="w-full h-full bg-black flex items-center justify-center relative">
      <div className="w-[100px] h-[100px] overflow-hidden relative">
        <div
          className={`flex gap-5 absolute left-0 top-0 ${
            isHorizontal ? "flex-row" : "flex-col"
          } ${
            isTransitioning ? "transition-transform duration-200 ease-out" : ""
          }`}
          style={{
            transform: isHorizontal
              ? `translateX(-${currentIndex * 120}px)`
              : `translateY(-${currentIndex * 120}px)`,
          }}
        >
          {colors.map((color, i) => {
            return (
              <div
                key={i}
                className={`w-[100px] h-[100px] rounded-md transition ease-out duration-200`}
                style={{
                  backgroundColor: color,
                }}
              />
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-1/3 top-1/2 -translate-y-1/2 z-10"
        onClick={handleXPrevClick}
        style={{ backgroundColor: color }}
      >
        <ArrowIcon className="rotate-270" />
      </button>
      <button
        type="button"
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute right-1/3 top-1/2 -translate-y-1/2 z-10"
        onClick={handleXNextClick}
        style={{ backgroundColor: color }}
      >
        <ArrowIcon className="rotate-90" />
      </button>
      <button
        type="button"
        onClick={handleYNextClick}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-20 z-10"
        style={{ backgroundColor: color }}
      >
        <ArrowIcon />
      </button>
      <button
        type="button"
        onClick={handleYPrevClick}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-20 z-10"
        style={{ backgroundColor: color }}
      >
        <ArrowIcon className="rotate-180" />
      </button>
    </div>
  );
};
