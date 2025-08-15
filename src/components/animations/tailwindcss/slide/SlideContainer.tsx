export const SlideContainer = ({
  colors,
  isActive,
  step,
  isTransitioning,
  currentIndex,
  vertical,
}: {
  colors: string[];
  isActive: boolean;
  step: number;
  isTransitioning: boolean;
  currentIndex: number;
  vertical: boolean;
}) => {
  return (
    <div
      className={`absolute inset-0 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`slider flex ${
          vertical ? "flex-col" : "flex-row"
        } gap-[80px] absolute left-10 top-10 ${
          isTransitioning ? "transition-transform duration-500 ease-out" : ""
        }`}
        style={{
          transform: `translate${vertical ? "Y" : "X"}(-${
            currentIndex * step
          }px)`,
        }}
      >
        {colors.map((c, i) => {
          const diff = i - currentIndex;
          const distancePx = Math.abs(diff * step);
          const maxDistance = step;
          const opacity = Math.max(1 - distancePx / maxDistance, 0);

          return (
            <div
              key={i}
              className="w-[100px] h-[100px] rounded-md"
              style={{
                backgroundColor: c,
                opacity: opacity,
                transition: isTransitioning
                  ? "opacity 0.8s ease-out"
                  : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
