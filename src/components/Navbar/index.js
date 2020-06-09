import React from "react";
import "./navbar.css";

import logo from "../../assets/images/logo-horizontal.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img
            src={logo}
            alt="GRIS - Espaço solidário casa Maria de Lourdes"
            title="GRIS - Espaço solidário casa Maria de Lourdes"
          />
        </a>
      </div>

      <nav>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/quemsomos">Quem somos</a>
            </li>
            <li>
              <a href="/acoes">Ações</a>
            </li>
            <li>
              <a href="#">Quero contribuir &darr;</a>
              <ul>
                <li>
                  <a href="/querodoar">Quero doar</a>
                </li>
                <li>
                  <a href="/queroservoluntario">Quero ser voluntário</a>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
