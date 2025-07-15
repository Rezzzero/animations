export const AnimationItem = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) => {
  const colorClasses: Record<string, { card: string }> = {
    blue: {
      card: "bg-[#223286]/70",
    },
    purple: {
      card: "bg-purple-800/70",
    },
    pink: {
      card: "bg-pink-800/70",
    },
  };

  const selectedColor = colorClasses[color];

  return (
    <div
      className={`flex flex-col ${selectedColor.card} p-5 shadow-lg shadow-blue-900 hover:shadow-red-900 hover:scale-102 transition-transform transition-shadow duration-300 rounded-md w-full`}
    >
      <h3 className="text-xl mb-4">{title}</h3>
      <div className="h-82 lg:h-78 2xl:h-100 rounded-sm w-full">{children}</div>
    </div>
  );
};
