import { useState } from "react";
import { TechList } from "../components/tech-list/TechList";
import { TailwindTechList } from "../constants/constants";

export const Tailwind = () => {
  const [selectedTechs, setSelectedTechs] =
    useState<string[]>(TailwindTechList);

  return (
    <div className="flex items-center justify-center my-5 w-full">
      <TechList list={TailwindTechList} color="purple" />
    </div>
  );
};
