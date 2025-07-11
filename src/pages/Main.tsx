import { useState } from "react";
import { TechList } from "../components/tech-list/TechList";
import { MainTechList } from "../constants/constants";

export const Main = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>(MainTechList);
  return (
    <div className="flex items-center justify-center my-5 w-full">
      <TechList list={MainTechList} color="blue" />
    </div>
  );
};
