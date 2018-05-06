import React from "react";
import s from "./Header.css";

const Header = () => (
  <header className={s.container}>
    <div className={s.inner}>
      <img
        src={
          "https://assets.viaplay.tv/frontend-2017080106/images/header-logo-large.png"
        }
        alt="Viaplay logo"
        className={s.logo}
      />
    </div>
  </header>
);

export default Header;
