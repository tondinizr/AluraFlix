import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import "./Menu.css";

function Menu() {
  console.log(window.location.pathname);
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="TONFLIX" className="Logo" />
      </Link>
      {window.location.pathname === "/" ? (
        <Button to="/cadastro/video" className="ButtonLink">
          Novo Vídeo
        </Button>
      ) : (
        <Button to="/" className="ButtonLink">
          Pagina inicial
        </Button>
      )}
    </nav>
  );
}

export default Menu;
