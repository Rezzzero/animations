export const TechItem = ({
  tech,
  color,
  handleToggle,
  isSelected,
}: {
  tech: string;
  color: string;
  handleToggle: (tech: string) => void;
  isSelected: boolean;
}) => {
  const colorClasses: Record<string, string> = {
    blue: isSelected
      ? "bg-[#2D41A2] text-[#7E91F4] hover:bg-[#223286]"
      : "bg-[#223286] text-[#7E91F4] hover:bg-[#2D41A2]",

    purple: isSelected
      ? "bg-purple-800 text-purple-300 hover:bg-purple-900"
      : "bg-purple-900 text-purple-300 hover:bg-purple-800",

    pink: isSelected
      ? "bg-pink-800 text-pink-300 hover:bg-pink-900"
      : "bg-pink-900 text-pink-300 hover:bg-pink-800",
  };

  return (
    <button
      type="button"
      onClick={() => handleToggle(tech)}
      className={`flex items-center px-4 py-1 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${colorClasses[color]}`}
    >
      {tech}
    </button>
  );
};
