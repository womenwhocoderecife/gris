import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="home-banner">
      <div className="banner-video">
        <iframe
          src="https://www.youtube.com/embed/4euEVkkLVYY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video institucional"
        ></iframe>
      </div>
      <div className="description">
        <p>
          <b>O GRIS Espaço Solidário – Casa Maria de Lourdes </b>é um espaço sem
          fins lucrativos situada no bairro da Várzea no Recife. Ela fornece
          apoio psicopedagógicos a crianças e famílias da comunidade Vila Arraes
          e entorno. Fundada há um ano por Joice Paixão e Cristina Zidanes, a
          instituição inicialmente funcionava como um centro de redistribuição
          de doações para a comunidade, mas o projeto evoluiu e passou a
          oferecer diversas atividades gratuitas para as famílias da comunidade,
          incluindo o acompanhamento pedagógico de crianças de 5 a 15 anos e o
          acompanhamento psicológico tanto das crianças como das famílias. O
          espaço ainda oferece atividades de reforço escolar, atendimentos
          terapêuticos, aulas de dança, audiovisual, atendimento
          psicopedagógico, arte e ludicidade, aulas de inglês e musicalidade.
          São atendidas um total de 60 crianças e 50 famílias, também atuando
          por meio de bazar solidário e arrecadação e distribuição de cestas
          básicas.
        </p>
      </div>
    </section>
  );
}
