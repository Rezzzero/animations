import { TechItem } from "../tech-item/TechItem";

export const TechList = ({
  list,
  selectedTechs,
  handleToggle,
  color,
}: {
  list: string[];
  selectedTechs: string[];
  handleToggle: (tech: string) => void;
  color: string;
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 corben">
      {list.map((tech) => (
        <>
          <TechItem
            key={tech}
            tech={tech}
            handleToggle={handleToggle}
            color={color}
            isSelected={selectedTechs.includes(tech)}
          />
        </>
      ))}
    </div>
  );
};
