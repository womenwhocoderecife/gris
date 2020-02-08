import React from "react";
import "./Services.css";
import health from "../../assets/saude.png";
import education from "../../assets/educacao.png";
import training from "../../assets/capacitacao.png";
import others from "../../assets/outros.png";

export default function Services() {
  return (
    <section className='services'>
      <div className='services-card'>
        <img src={health} alt="Criança tomando vacina" />
        saúde
      </div>
      <div className='services-card'>
        <img src={education} alt="Criança tomando vacina" />
        educação
      </div>
      <div className='services-card'>
        <img src={training} alt="Criança tomando vacina" />
        capacitação profissional
      </div>
      <div className='services-card'>
        <img src={others} alt="Criança tomando vacina" />
        outros serviços
      </div>
    </section>
  );
}
