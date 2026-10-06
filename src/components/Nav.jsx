import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from '../assets/Library.svg';

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

    return (
    <nav>
      <div className="nav__container">
        <link to="/">
        <img src={LibraryLogo} alt="" className="logo" />
        </link>
        <ul className="nav__links">
          <li className="nav__list">
            <link to="/" className="nav__link">
            Home
            </link>
          </li>
          <li className="nav__list">
            <link to="/books" className="nav__link">
            Books
            </link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <link to="/cart" className="nav__link">
            <FontAwesomeIcon icon="shopping-cart" />
            </link>
            <span className="cart__length">2</span>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <link to="/" className="menu__link">
              Home
              </link>
            </li>
            <li className="menu__list">
              <link to="/" className="menu__link">
              Books
              </link>
            </li>
            <li className="menu__list">
              <link to="/" className="menu__link">
              Cart
              </link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;