import { Link } from "react-router-dom";
import { NavLink } from "../../nav-link/NavLink";
import { NavLinkList } from "../../../constants/constants";
import Sidebar from "../sidebar/Sidebar";
import { useRef, useState, useEffect } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex w-full bg-[#553ED4] h-[50px]">
        <div className="container mx-auto sm:py-5 sm:px-0 flex knewave lg:text-2xl xl:text-3xl items-center relative">
          <div className="absolute top-0 left-0 z-20 sm:hidden">
            <Sidebar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              containerRef={containerRef}
            />
          </div>
          <Link to="/" className="absolute right-5 sm:left-5 w-fit">
            Animations
          </Link>
          <ul className="flex hidden sm:flex gap-12 justify-center flex-1">
            {NavLinkList.map(({ path, title }) => (
              <NavLink route={path} title={title} key={title} />
            ))}
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 bg-black/60 z-10 w-full h-full" />
      )}
    </>
  );
};
