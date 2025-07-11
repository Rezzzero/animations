import { useState } from "react";

export const useSelectedTechs = ({ list }: { list: string[] }) => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>(list);

  const handleToggle = (tech: string) =>
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );

  return { selectedTechs, handleToggle };
};
