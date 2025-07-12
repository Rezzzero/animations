import { AnimationList } from "../components/animation-list/AnimationList";
import { TechList } from "../components/tech-list/TechList";
import { MainTechList } from "../constants/constants";
import { useSelectedTechs } from "../hooks/useSelectedTechs";

export const Main = () => {
  const { selectedTechs, handleToggle } = useSelectedTechs({
    list: MainTechList,
  });
  return (
    <>
      <div className="flex items-center justify-center my-5 w-full">
        <TechList
          list={MainTechList}
          selectedTechs={selectedTechs}
          handleToggle={handleToggle}
          color="blue"
        />
      </div>
      <AnimationList />
    </>
  );
};
