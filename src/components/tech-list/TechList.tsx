import { TechItem } from "../tech-item/TechItem";

export const TechList = ({
  list,
  color,
}: {
  list: string[];
  color: string;
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 corben">
      {list.map((tech) => (
        <>
          <TechItem key={tech} tech={tech} color={color} />
        </>
      ))}
    </div>
  );
};
