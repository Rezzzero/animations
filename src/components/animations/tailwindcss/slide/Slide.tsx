import { useRef, useState } from "react";
import ArrowIcon from "../../../../assets/slider-icons/arrow-icon.svg?react";

export const Slide = () => {
  const items = [1, 2, 3, 4, 5];
  const colors = ["red", "orange", "green", "blue", "purple"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeDirection = useRef<"X" | "Y">(null);

  const color = colors[currentIndex];
  const handleXNextClick = () => {
    if (currentIndex >= items.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
    activeDirection.current = "X";
  };

  const handleYNextClick = () => {
    if (currentIndex >= items.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
    activeDirection.current = "Y";
  };

  const handleXPrevClick = () => {
    if (currentIndex <= 0) setCurrentIndex(items.length - 1);
    else setCurrentIndex(currentIndex - 1);
    activeDirection.current = "X";
  };

  const handleYPrevClick = () => {
    if (currentIndex <= 0) setCurrentIndex(items.length - 1);
    else setCurrentIndex(currentIndex - 1);
    activeDirection.current = "Y";
  };

  return (
    <div className="w-full h-full bg-black flex items-center justify-center relative">
      <div className="w-[100px] h-[100px] overflow-hidden relative">
        <div
          className={`flex gap-5 ${
            activeDirection.current === "X" ? "flex-row" : "flex-col"
          } absolute left-0 top-0`}
        >
          {items.map((i) => {
            return (
              <div
                key={i}
                className={`w-[100px] h-[100px] rounded-md transition ease-out duration-200`}
                style={{
                  backgroundColor: color,
                  transform: `translate${activeDirection.current}(-${
                    currentIndex * 120
                  }%)`,
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
