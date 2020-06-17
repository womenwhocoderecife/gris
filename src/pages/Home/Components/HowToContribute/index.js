import React from "react";
import "./HowToContribute.css";
import Card from "../Card/index";

import iconeVoluntario from "../../../../assets/images/icon-voluntario.png";
import iconeDoacoes from "../../../../assets/images/icon-doacoes.png";
import iconeBazar from "../../../../assets/images/icon-bazar.png";
import iconeLojinha from "../../../../assets/images/icon-lojinha.png";

export default function HowToContribute() {
  return (
    <section className="how-to-contribute">
      <h2>Como contribuir</h2>
      <div className="icons">
        <Card
          image={iconeVoluntario}
          text="Voluntário"
          linkTo="/voluntario"
          textColor="#FFF"
          width="44%"
        />
        <Card
          image={iconeDoacoes}
          text="Doações"
          linkTo="/doar"
          textColor="#FFF"
          width="44%"
        />
        <Card
          image={iconeBazar}
          text="Bazar"
          linkTo="/acoes"
          textColor="#FFF"
          width="44%"
        />
        <Card
          image={iconeLojinha}
          text="Lojinha"
          linkTo="/acoes"
          textColor="#FFF"
          width="44%"
        />
      </div>
    </section>
  );
}
