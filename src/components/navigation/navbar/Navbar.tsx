import { Link } from "react-router-dom";
import { NavLink } from "../../nav-link/NavLink";
import { NavLinkList } from "../../../constants/constants";
import Sidebar from "../sidebar/Sidebar";
import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
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
      <div className="flex w-full bg-violet-800 h-[50px] overflow-hidden relative">
        <div className="fixed top-1/2 transform -translate-y-1/2 left-0 w-full z-20 sm:hidden">
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            containerRef={containerRef}
          />
        </div>
        <div className="container mx-auto sm:py-5 sm:px-0 flex knewave lg:text-xl xl:text-2xl items-center relative z-10">
          <Link to="/" className="absolute right-5 sm:left-5 w-fit">
            Animations
          </Link>
          <ul className="flex hidden sm:flex gap-12 justify-center flex-1">
            {NavLinkList.map(({ path, title }) => (
              <NavLink route={path} title={title} key={title} />
            ))}
          </ul>
        </div>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="cube" />
        ))}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 bg-black/60 z-10 w-full h-full" />
      )}
    </>
  );
};
