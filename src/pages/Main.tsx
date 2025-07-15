import { AnimationList } from "../components/animation-list/AnimationList";
import { cssAnimations } from "../components/animations/css/cssAnimations";
import { TechList } from "../components/tech-list/TechList";
import { MainTechList } from "../constants/constants";
import { useSelectedTechs } from "../hooks/useSelectedTechs";

export const Main = () => {
  const { selectedTechs, handleToggle } = useSelectedTechs({
    list: MainTechList,
  });
  const color = "blue";
  return (
    <>
      <div className="flex items-center justify-center my-5 w-full">
        <TechList
          list={MainTechList}
          selectedTechs={selectedTechs}
          handleToggle={handleToggle}
          color={color}
        />
      </div>
      <AnimationList color={color} animations={cssAnimations} />
    </>
  );
};
