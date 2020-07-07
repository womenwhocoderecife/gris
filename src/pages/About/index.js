import React from "react";
import "./index.css";
import PageLayout from "../../components/PageLayout";
import imagem from "../../assets/images/imagem-about.png";

export default function About() {
  return (
    <PageLayout title="História da Gris">
      <div className="about-container">
        <div className="about-description">
          {" "}
          O <b> GRIS Espaço Solidário – Casa Maria de Lourdes</b> é um espaço
          sem fins lucrativos situada no bairro da Várzea no Recife. Ela fornece
          apoio psicopedagógicos a crianças e famílias da comunidade Vila Arraes
          e entorno. Fundada há um ano por Joice Paixão e Cristina Zidanes, a
          instituição inicialmente funcionava como um centro de redistribuição
          de doações para a comunidade, mas o projeto evoluiu e passou a
          oferecer diversas atividades gratuitas para as famílias da comunidade,
          incluindo o acompanhamento pedagógico de crianças de 5 a 15 anos e o
          acompanhamento psicológico tanto das crianças como das famílias.{" "}
          <br /> <br /> O espaço ainda oferece atividades de reforço escolar,
          atendimentos terapêuticos, aulas de dança, audiovisual, atendimento
          psicopedagógico, arte e ludicidade, aulas de inglês e musicalidade.
          São atendidas um total de 60 crianças e 50 famílias, também atuando
          por meio de bazar solidário e arrecadação e distribuição de cestas
          básicas.
        </div>
        <div className="image-about">
          {" "}
          <img
            src={imagem}
            alt="Voluntárias e crianças sentadas em cículo realizando atividades"
          />{" "}
        </div>
      </div>
    </PageLayout>
  );
}
