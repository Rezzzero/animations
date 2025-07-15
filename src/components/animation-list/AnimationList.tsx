import { AnimationItem } from "../animation-item/AnimationItem";

type AnimationListProps = {
  color: string;
  animations: {
    title: string;
    description: string;
    Component: React.FC;
  }[];
};

export const AnimationList = ({ color, animations }: AnimationListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center w-full container mx-auto">
      {animations.map((animation) => (
        <AnimationItem
          key={animation.title}
          title={animation.title}
          color={color}
        >
          <animation.Component />
        </AnimationItem>
      ))}
    </div>
  );
};
