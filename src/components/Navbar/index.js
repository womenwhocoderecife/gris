import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/criacoes">Criações</Link>
      <Link to="/eventos">Eventos</Link>
    </div>
  );
}
