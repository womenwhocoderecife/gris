import React from "react";
import "./Services.css";
import pedagogical_support from "../../assets/icon-saude.png";
import reinforcement from "../../assets/icon-educacao.png";
import support from "../../assets/icon-acompanhamento.png";
import workshops from "../../assets/icon-oficinas.png";

export default function Services() {
  return (
    <section className='services' >
      <text className='title'>
        áreas de atuação
      </text>
      <div className='services-card'>
      <div className='card'>
        <img src={pedagogical_support} alt="Crianças executando atividades escolares" />
        acompanhamento pedagógico
      </div>
      <div className='card'>
        <img src={reinforcement} alt="Profissional auxiliando criança na compreensão de um exercício" />
        reforço escolar
      </div>
      <div className='card'>
        <img src={support} alt="Crianças em atividade ao ar livre" />
        acompanhamento social
      </div>
      <div className='card'>
        <img src={workshops} alt="Crianças participando de oficina criativa" />
        oficinas
      </div>

      </div>
    </section>
  );
}
