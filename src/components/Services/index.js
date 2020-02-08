import React from "react";
import "./Services.css";
import education from "../../assets/educacao.png";

export default function Services() {
  return (
    <section className='services'>
      <div className='services-card'>
        <img src={education} alt="Criança tomando vacina" />
        saúde
      </div>
      <div className='services-card'>
        <img src={education} alt="Criança tomando vacina" />
        saúde
      </div>
      <div className='services-card'>
        <img src={education} alt="Criança tomando vacina" />
        saúde
      </div>
      <div className='services-card'>
        <img src={education} alt="Criança tomando vacina" />
        saúde
      </div>
    </section>
  );
}
