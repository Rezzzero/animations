export const AnimationItem = ({
  title,
  desciption,
  color,
}: {
  title: string;
  desciption: string;
  color: string;
}) => {
  const colorClasses: Record<string, { card: string; preview: string }> = {
    blue: {
      card: "bg-[#223286]/70",
      preview: "bg-[#223286]",
    },
    purple: {
      card: "bg-purple-800/70",
      preview: "bg-purple-800",
    },
    pink: {
      card: "bg-pink-800/70",
      preview: "bg-pink-800",
    },
  };

  const selectedColor = colorClasses[color];

  return (
    <div
      className={`flex flex-col ${selectedColor.card} p-5 shadow-lg shadow-blue-900 hover:shadow-red-900 hover:scale-105 transition-transform transition-shadow duration-300 rounded-md w-full group overflow-hidden relative`}
    >
      <h3 className="text-xl mb-4 group-hover:opacity-0 transition-all duration-300 ease-in-out">
        {title}
      </h3>
      <div className={`h-32 ${selectedColor.preview} rounded-sm w-full`}></div>
      <div className="absolute bottom-0 left-0 h-full w-full bg-black/75 p-5 flex flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <h3>{title}</h3>
        <p>{desciption}</p>
      </div>
    </div>
  );
};
