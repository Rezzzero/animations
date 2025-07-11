export const TechItem = ({ tech, color }: { tech: string; color: string }) => {
  const colorClasses: Record<string, string> = {
    blue: "bg-[#2D41A2] text-[#7E91F4] hover:bg-[#223286]",
    purple: "bg-purple-800 text-purple-300 hover:bg-purple-900",
    pink: "bg-pink-800 text-pink-300 hover:bg-pink-900",
  };

  return (
    <button
      type="button"
      className={`flex items-center px-4 py-1 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
        colorClasses[color] || ""
      }`}
    >
      {tech}
    </button>
  );
};
