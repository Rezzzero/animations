import { TechList } from "../components/tech-list/TechList";
import { TailwindTechList } from "../constants/constants";
import { useSelectedTechs } from "../hooks/useSelectedTechs";

export const Tailwind = () => {
  const { selectedTechs, handleToggle } = useSelectedTechs({
    list: TailwindTechList,
  });

  return (
    <div className="flex items-center justify-center my-5 w-full">
      <TechList
        list={TailwindTechList}
        selectedTechs={selectedTechs}
        handleToggle={handleToggle}
        color="purple"
      />
    </div>
  );
};
