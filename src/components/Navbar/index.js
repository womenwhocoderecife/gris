import React from "react";
import {Link, ul} from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo-horizontal.png";

export default function Navbar() {
    return (
        <div className="header">
            <div className="logo"><img src={logo} alt="Logotipo da ONG Gris"/></div>
            <div className="menu">
                <ul className="menu-itens">
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/quemsomos">Quem somos</Link></li>
                    <li><Link to="/acoes">Ações</Link></li>
                    <li><Link to="/calendario">Calendário</Link></li>
                    <li>
                        Quero Contribuir
                        <ul className="sub-menu-itens">
                            <li><Link to="/querodoar">Quero Doar</Link></li>
                            <li><Link to="/queroservoluntario">Quero ser Voluntário</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
