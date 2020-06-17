import React from "react";
import "./Services.css";
import Card from "../Card/index";

import pedagogical_support from "../../../../assets/images/icon-saude.png";
import reinforcement from "../../../../assets/images/icon-educacao.png";
import support from "../../../../assets/images/icon-acompanhamento.png";
import workshops from "../../../../assets/images/icon-oficinas.png";

export default function Services() {
  return (
    <section className="services">
      <h2>áreas de atuação</h2>
      <div className="services-card">
        <Card
          image={pedagogical_support}
          text="Acompanhamento Pedagógico"
          linkTo="/acoes"
        />
        <Card image={reinforcement} text="Reforço escolar" linkTo="/acoes" />
        <Card image={support} text="Acompanhamento Social" linkTo="/acoes" />
        <Card image={workshops} text="Oficinas Criativas" linkTo="/acoes" />
      </div>
    </section>
  );
}
