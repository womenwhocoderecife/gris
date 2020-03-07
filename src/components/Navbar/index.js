import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-horizontal.png";

export default function Navbar() {
  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} alt="Logotipo da ONG Gris" />
      </div>
      <div>
        <Link to="/" className="menu-itens">
          Início
        </Link>
        <Link to="/quemsomos" className="menu-itens">
          Quem somos
        </Link>
        <Link to="/acoes" className="menu-itens">
          Ações
        </Link>
        <Link to="/calendario" className="menu-itens">
          Calendário
        </Link>
        <Link to="/quero-contribuir" className="menu-itens">
          Quero Contribuir
        </Link>
      </div>
    </div>
  );
}
