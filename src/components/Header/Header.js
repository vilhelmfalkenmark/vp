import React from "react";
import logo from "../../images/logo.png";
import s from "./Header.css";

const Header = () => (
  <header className={s.container}>
    <div className={s.inner}>
      <img src={logo} alt="Viaplay logo" className={s.logo} />
    </div>
  </header>
);

export default Header;
