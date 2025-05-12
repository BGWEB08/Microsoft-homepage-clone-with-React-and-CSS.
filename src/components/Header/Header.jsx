import { useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="main-nav">
      <Logo />
      <ul className={`main-menu ${menuOpen ? "show" : ""}`}>
        <li><a href="#">Office</a></li>
        <li><a href="#">Windows</a></li>
        <li><a href="#">Surface</a></li>
        <li><a href="#">Xbox</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <ul className="right-menu">
        <li><a href="#"><i className="bi bi-search"></i></a></li>
        <li><a href="#"><i className="bi bi-cart-fill"></i></a></li>
      </ul>
      <div onClick={toggleMenu}>
        <i className="bi bi-list menu-icon"></i>
      </div>
    </nav>
  );
};

export default Header;
