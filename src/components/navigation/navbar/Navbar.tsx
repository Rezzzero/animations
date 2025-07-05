import { Link } from "react-router-dom";
import burgerIcon from "../../../assets/menu-burger-icon.svg";
import { NavLink } from "../../nav-link/NavLink";

export const Navbar = () => {
  return (
    <div className="flex w-full bg-[#553ED4]">
      <div className="container mx-auto py-1 px-5 sm:py-5 sm:px-0 flex knewave lg:text-2xl xl:text-3xl items-center relative">
        <img
          src={burgerIcon}
          alt="menu-burger-icon"
          className="w-7 h-7 sm:hidden"
        />
        <Link to="/" className="absolute right-5 sm:left-5 w-fit">
          Animations
        </Link>
        <ul className="flex hidden sm:flex gap-12 justify-center flex-1">
          <NavLink route="/" title="Home" />
          <NavLink route="/tailwind" title="Tailwind" />
          <NavLink route="/framer-motion" title="Framer Motion" />
        </ul>
      </div>
    </div>
  );
};
