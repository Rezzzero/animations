import { TechList } from "../components/tech-list/TechList";
import Drag from "../drag/Drag";
import { FramerMotionTechList } from "../constants/constants";
import { useSelectedTechs } from "../hooks/useSelectedTechs";

export const FramerMotion = () => {
  const { selectedTechs, handleToggle } = useSelectedTechs({
    list: FramerMotionTechList,
  });

  return (
    <div className="flex items-center justify-center mb-5 w-full">
      <TechList
        list={FramerMotionTechList}
        selectedTechs={selectedTechs}
        handleToggle={handleToggle}
        color="pink"
      />

      <Drag />
    </div>
  );
};
