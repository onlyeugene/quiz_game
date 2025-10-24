import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ page, onClickMenuButton }) => {
  let renderHeader = (
    <>
      <figure>
        {/* <img
          src={Logo}
          alt="quiz master logo"
          className="block__header__logo"
        /> */}
        <h1>Quiz</h1>
      </figure>
    </>
  );

  let renderPage;
  if (page === "home") {
    renderPage = (
      <header className="block__header-home">
        <figure>
          {/* <img
            src={Logo}
            alt="quiz master logo"
            className="block__header__logo"
          /> */}
          <h1>Quiz</h1>
        </figure>
        <button
          onClick={onClickMenuButton}
          aria-label="Open menu"
          aria-expanded="false"
          className="block__header-home__Header__menu-button"
        >
          <i className="Header__menu-icon material-icons" aria-hidden="true">
            menu
          </i>
        </button>
      </header>
    );
  } else if (page === "quiz") {
    renderPage = (
      <header className="block__header-other">
        {renderHeader}
        <nav className="block__header--nav">
          <h4>QUIZ MASTER</h4>
          <span>|</span>
          <Link
            to="/"
            className="block__header--nav--link"
            aria-label="back to home"
          >
            HOME
          </Link>
          <button
            onClick={onClickMenuButton}
            aria-label="Open menu"
            className="Header__menu-button"
          >
            <i className="Header__menu-icon material-icons" aria-hidden="true">
              menu
            </i>
          </button>
        </nav>
      </header>
    );
  } else if (page === "stats") {
    renderPage = (
      <header className="block__header-other">
        {renderHeader}
        <nav className="block__header--nav">
          <h4>GAME STATS</h4>
          <span>|</span>
          <Link
            to="/"
            className="block__header--nav--link"
            aria-label="back to home"
          >
            HOME
          </Link>
          <button
            onClick={onClickMenuButton}
            aria-label="Open menu"
            className="Header__menu-button"
          >
            <i className="Header__menu-icon material-icons" aria-hidden="true">
              menu
            </i>
          </button>
        </nav>
      </header>
    );
  } else if (page === "about") {
    renderPage = (
      <header className="block__header-other">
        {renderHeader}
        <nav className="block__header--nav">
          <h4>ABOUT GAME</h4>
          <span>|</span>
          <Link
            to="/"
            className="block__header--nav--link"
            aria-label="back to home"
          >
            HOME
          </Link>
          <button
            onClick={onClickMenuButton}
            aria-label="Open menu"
            className="Header__menu-button"
          >
            <i className="Header__menu-icon material-icons" aria-hidden="true">
              menu
            </i>
          </button>
        </nav>
      </header>
    );
  }

  return <>{renderPage}</>;
};

export default Header;
