import { useState } from "react";
import { TechList } from "../components/tech-list/TechList";
import Drag from "../drag/Drag";
import { FramerMotionTechList } from "../constants/constants";

export const FramerMotion = () => {
  const [selectedTechs, setSelectedTechs] =
    useState<string[]>(FramerMotionTechList);

  return (
    <div className="flex items-center justify-center mb-5 w-full">
      <TechList list={FramerMotionTechList} color="pink" />

      <Drag />
    </div>
  );
};
