import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/tailwind">Tailwind</Link>
      <Link to="/framer-motion">Framer Motion</Link>
    </div>
  );
};
