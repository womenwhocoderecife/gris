import React from "react";
import { ul } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-horizontal.png";

export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logotipo da ONG Gris" />
      </div>
      <div className="menu">
        <ul className="menu-itens">
          <li to="/">
            Início
          </li>
          <li to="/">
            Quem somos
          </li>
          <li to="/">
            Ações
          </li>
          <li to="/">
            Calendário
          </li>
          <li to="/">
            Quero Contribuir
            {/*
            <ul className="sub-menu-itens">
              <li>
                Quero Doar
              </li>
              <li>
                Quero ser Voluntário
              </li>
            </ul>
            */}
          </li>
        </ul>
      </div>
    </div>
  );
}
