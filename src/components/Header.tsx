import beer from "../assets/beer-logo.jpg";
import "../styles/Header.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import Contacts from "../views/Contacts";

export default function Header() {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [burgerMenu, setBurgerMenu] = useState<Boolean>(false);
  function handleNav() {
    setShowModal(!showModal);
  }
  function handleMenu() {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <div className="header headerMob">
      <img className="nav-logo" src={beer} alt="beer-logo" />
          <div className={`navbar ${burgerMenu && 'navbarMob'}`}>
              <p className="closeMenu" onClick={handleMenu}>&times;</p>
        <a className="nav-item" href="/">
          Home
        </a>
        <a className="nav-item" href="#products">
          Products
        </a>
        <a className="nav-item" onClick={handleNav}>
          Contact us
        </a>
      </div>

      <div className="burger-menu" onClick={handleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      {showModal &&
        createPortal(<Contacts onClose={handleNav} />, document.body)}
    </div>
  );
}
