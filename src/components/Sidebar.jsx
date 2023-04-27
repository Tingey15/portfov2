import { NavLink } from "react-router-dom";
import { links, social } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../features/navbar/NavbarSlice";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

export default function Sidebar() {
  const { isOpen } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  return (
    <motion.div
      className={`${isOpen ? "sidebarCont" : " hiddenFr"}`}
      animate={{ position: "fixed" }}
    >
      <ul>
        {links.map((link) => (
          <motion.li
            key={link.id}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="sideLink"
          >
            <NavLink
              onClick={() => {
                dispatch(toggleNav());
              }}
              key={link.id}
              to={link.url}
            >
              {link.text}
            </NavLink>
          </motion.li>
        ))}
        <motion.li
          className="socialSidebar"
          key={nanoid()}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {isOpen &&
            social.map((social) => (
              <a
                className="navLink"
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.icon}
              </a>
            ))}
        </motion.li>
      </ul>
    </motion.div>
  );
}
