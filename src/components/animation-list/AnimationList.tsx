import { AnimationItem } from "../animation-item/AnimationItem";

export const AnimationList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center w-full container mx-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <AnimationItem key={index} title="Title" desciption="Description" />
      ))}
    </div>
  );
};
