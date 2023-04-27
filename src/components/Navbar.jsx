import { useDispatch, useSelector } from "react-redux";
import { social, links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { toggleNav } from "../features/navbar/NavbarSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.navbar);
  return (
    <nav className={`${isOpen ? null : "fixed"}`}>
      <div className="nav-center">
        <button
          className="togglebtn"
          onClick={() => {
            dispatch(toggleNav());
          }}
        >
          <FaBars className="fa" size="30px" />
        </button>

        <div className="header">
          <h2 className="logo">Andrew Tingey</h2>
        </div>
        <div className="linkContainer">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navLink" : "navLink"
              }
              key={link.id}
              to={link.url}
            >
              {link.text}
            </NavLink>
          ))}
          <a
            href="../../public/resume.pdf"
            download="Andrew Tingey Resume.pdf"
            className="navLink"
          >
            Resume
          </a>
        </div>
        <div className="linkContainer">
          {social.map((social) => (
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
        </div>
      </div>
    </nav>
  );
}
