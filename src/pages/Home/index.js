import React from "react";
import Card from "../../components/Card";

import pedagogical_support from "../../assets/images/icon-saude.png";
import reinforcement from "../../assets/images/icon-educacao.png";
import support from "../../assets/images/icon-acompanhamento.png";
import workshops from "../../assets/images/icon-oficinas.png";

import iconeVoluntario from "../../assets/images/icon-voluntario.png";
import iconeDoacoes from "../../assets/images/icon-doacoes.png";
import iconeBazar from "../../assets/images/icon-bazar.png";
import iconeLojinha from "../../assets/images/icon-lojinha.png";

import location from "../../assets/images/icon-location.png";
import email from "../../assets/images/icon-email.png";
import phone from "../../assets/images/icon-phone.png";
import facebook from "../../assets/images/icon-fb.png";
import instagram from "../../assets/images/icon-ig.png";
import youtube from "../../assets/images/icon-yt.png";

import "./index.css";
import Title from "../../components/Title";

export default function Home() {
  return (
    <div>
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
            <b>O GRIS Espaço Solidário – Casa Maria de Lourdes </b>é um espaço
            sem fins lucrativos situada no bairro da Várzea no Recife. Ela
            fornece apoio psicopedagógicos a crianças e famílias da comunidade
            Vila Arraes e entorno. Fundada há um ano por Joice Paixão e Cristina
            Zidanes, a instituição inicialmente funcionava como um centro de
            redistribuição de doações para a comunidade, mas o projeto evoluiu e
            passou a oferecer diversas atividades gratuitas para as famílias da
            comunidade, incluindo o acompanhamento pedagógico de crianças de 5 a
            15 anos e o acompanhamento psicológico tanto das crianças como das
            famílias. O espaço ainda oferece atividades de reforço escolar,
            atendimentos terapêuticos, aulas de dança, audiovisual, atendimento
            psicopedagógico, arte e ludicidade, aulas de inglês e musicalidade.
            São atendidas um total de 60 crianças e 50 famílias, também atuando
            por meio de bazar solidário e arrecadação e distribuição de cestas
            básicas.
          </p>
        </div>
      </section>

      <section className="services">
        <Title text="áreas de atuação" />
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

      <section className="how-to-contribute">
        <Title text="Como contribuir" textColor="#fff" />
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

      <section className="where-we-are">
        <Title text="onde estamos" />
        <div className="map">
          <div className="google-map">
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.573998710754!2d-34.96229708583211!3d-8.04277849420867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1bdb19c9a137%3A0x96c0a7ea168c3fa8!2sR.%20Diogo%20Barbosa%20Machado%2C%2015%20-%20V%C3%A1rzea%2C%20Recife%20-%20PE%2C%2050810-290!5e0!3m2!1spt-BR!2sbr!4v1581179143138!5m2!1spt-BR!2sbr"
            />
          </div>
          <div className="map-description">
            <div className="map-description-itens">
              <img src={location} alt="Ícone do globo terra" />
              <p>
                Rua Diogo Barbosa Machado, num.15, Várzea. Recife - PE - Brasil.
                CEP: 50810-290
              </p>
            </div>
            <div className="map-description-itens">
              <img src={email} alt="Ícone de um @" />
              <p>grisespacosolidario@gmail.com</p>
            </div>
            <div className="map-description-itens">
              <img src={phone} alt="Ícone de telefone" />
              <p>(81) 99766-4791</p>
            </div>

            <div className="social">
              <p>Acompanhe nossas redes:</p>
              <div className="social-itens">
                <a
                  href="https://www.facebook.com/gris.solidario"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook Gris Solidário"
                >
                  <img src={facebook} alt="Ícone do facebook" />
                </a>
                <a
                  href="https://www.instagram.com/gris.solidario/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram Gris Solidário"
                >
                  <img src={instagram} alt="Ícone do instagram" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC7-xsn23DJzy_MgudCehX7g"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube Gris Solidário"
                >
                  <img src={youtube} alt="Ícone do youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
