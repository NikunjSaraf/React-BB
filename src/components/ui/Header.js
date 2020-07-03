import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="center" style={{ marginTop: "50px" }}>
      <img src={logo} alt="" width="200" height="120" />
    </header>
  );
};
export default Header;
