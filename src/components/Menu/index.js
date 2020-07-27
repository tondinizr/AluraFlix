import React from "react";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="TONFLIX" className="Logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
