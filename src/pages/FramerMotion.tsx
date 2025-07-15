import { TechList } from "../components/tech-list/TechList";
import Drag from "../drag/Drag";
import { FramerMotionTechList } from "../constants/constants";
import { useSelectedTechs } from "../hooks/useSelectedTechs";
import { AnimationList } from "../components/animation-list/AnimationList";
import { framerMotionAnimations } from "../components/animations/framer-motion/framerMotionAnimations";

export const FramerMotion = () => {
  const { selectedTechs, handleToggle } = useSelectedTechs({
    list: FramerMotionTechList,
  });

  const color = "pink";

  return (
    <>
      <div className="flex items-center justify-center mb-5 w-full">
        <TechList
          list={FramerMotionTechList}
          selectedTechs={selectedTechs}
          handleToggle={handleToggle}
          color={color}
        />

        <Drag />
      </div>
      <AnimationList color={color} animations={framerMotionAnimations} />
    </>
  );
};
