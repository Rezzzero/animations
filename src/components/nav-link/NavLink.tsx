import { Link, useLocation } from "react-router-dom";

export const NavLink = ({ route, title }: { route: string; title: string }) => {
  const location = useLocation();

  return (
    <Link
      to={route}
      className={`${
        location.pathname === route
          ? "text-yellow-300"
          : "hover:text-yellow-100 hover:scale-102"
      } transition-all duration-300 ease-in-out`}
    >
      {title}
    </Link>
  );
};
