import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <div id="menu">
      <div className="menu1">
      <Link to="/" className="menu-options">Início</Link>
      <Link to="/quemsomos" className="menu-options">Quem somos</Link>
      <Link to="/servicos" className="menu-options">Serviços</Link>
      </div>
      <img src={logo} alt="logo" className="logo"/>
      <div className="menu2">
      <Link to="/criacoes" className="menu-options">Criações</Link>
      <Link to="/eventos" className="menu-options">Eventos</Link>
      <Link to="/querodoar" className="menu-options doar">Quero doar</Link>
      </div>
    </div>
  );
}
