import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useDimensions } from "../../../hooks/useDimensions";
import { NavLinkList } from "../../../constants/constants";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({
  isOpen,
  setIsOpen,
  containerRef,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <div style={container}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={nav}
        >
          <motion.div
            style={background}
            className={`${
              isOpen ? "bg-violet-800" : "bg-white"
            } transition-colors duration-300 ease-in-out`}
            variants={sidebarVariants}
          />
          <Navigation />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </motion.nav>
      </div>
    </div>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul style={list} variants={navVariants}>
    {NavLinkList.map((link, i) => (
      <SidebarItem link={link} key={i} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SidebarItem = ({
  link,
}: {
  link: { path: string; title: string; logo: string };
}) => {
  const location = useLocation();
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={link.path}
        className={`flex gap-3 p-2 w-full items-center knewave cursour-pointer rounded-md ${
          link.path === location.pathname
            ? "bg-violet-950"
            : "hover:bg-violet-900 duration-300 ease-in-out"
        } `}
      >
        <img src={link.logo} alt={link.title + " logo"} className="w-5 h-5" />
        {link.title}
      </Link>
    </motion.li>
  );
};

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 25px 25px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <button
    style={toggleContainer}
    onClick={toggle}
    className={`${
      isOpen ? "text-white" : "text-black"
    } transition-colors duration-300 ease-in-out`}
  >
    <svg width="20" height="20" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const container: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  width: 500,
  maxWidth: "100%",
  height: "100vh",
  backgroundColor: "var(--accent)",
  overflow: "hidden",
};

const nav: React.CSSProperties = {
  width: 300,
};

const background: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 300,
};

const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 18,
  left: 15,
  width: 22,
  height: 20,
  borderRadius: "50%",
  background: "transparent",
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
  width: 300,
};

const listItem: React.CSSProperties = {
  listStyle: "none",
};
