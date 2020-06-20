import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink exact={true} activeClassName="is-active" to="/">
                Início
              </NavLink>
            </li>

            <li>
              <NavLink exact={true} activeClassName="is-active" to="/quemsomos">
                Quem somos
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName="is-active" to="/acoes">
                Ações
              </NavLink>
            </li>
            <li>
              <a href="#">Quero contribuir &darr;</a>
              <ul>
                <li>
                  <NavLink
                    exact={true}
                    activeClassName="is-active"
                    to="/querodoar"
                  >
                    Quero doar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact={true}
                    activeClassName="is-active"
                    to="/queroservoluntario"
                  >
                    Quero ser voluntário
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
