import React from "react";
import "./index.css";
import PageLayout from "../../components/PageLayout";

import acoes from "../../assets/images/actions-1.jpg";
import reforco from "../../assets/images/actions-2.jpg";
import acompanhamento from "../../assets/images/actions-3.jpg";
import kit from "../../assets/images/kit-autocuidado.jpeg";
import atividadeKits from "../../assets/images/atividade-kits.jpeg";
import cestasBasicas from "../../assets/images/cesta-basica.jpeg";
import kitLimpeza from "../../assets/images/kit-limpeza.jpeg";
import kitPedagogico from "../../assets/images/kit-pedagogico.jpeg";
import epis from "../../assets/images/epis.jpeg";
import Title from "../../components/Title";

export default function Creations() {
  return (
    <PageLayout title="Ações">
      <Title text="Ações realizadas ao longo do ano" />
      <div className="cards-actions">
        <div className="card-actions" title="Acompanhamento pedagógico">
          <img
            src={acoes}
            alt="Acompanhamento pedagógico"
            className="add-border"
          />
          <h2>Acompanhamento pedagógico</h2>
          <p>
            Atendimento de crianças e adolescentes com dificuldades e problemas
            de aprendizagem.
          </p>
        </div>

        <div className="card-actions" title="Reforço escolar">
          <img src={reforco} alt="Reforço escolar" className="add-border" />
          <h2>Acompanhamento pedagógico</h2>
          <p>
            Trabalhando as pontencialidades de cada criança de acordo com suas
            áreas de habilidade/interesse.
          </p>
        </div>

        <div className="card-actions" title="Acompanhamento social">
          <img
            src={acompanhamento}
            alt="Acompanhamento social"
            className="add-border"
          />
          <h2>Acompanhamento social</h2>
          <p>
            Cada família é acompanhada em sua totalidade; oficinas de produção
            criativa para crianças e mães.
          </p>
        </div>
      </div>

      <Title text="Ações realizadas durante a pandemia covid19" />
      <div className="cards-actions">
        <div
          className="card-actions"
          title="Kits de mimo e auto cuidado para as mães"
        >
          <img
            src={kit}
            alt="Kits de mimo e auto cuidado para as mães"
            className="add-border"
          />
          <h2>Kits de mimo e auto cuidado para as mães</h2>
        </div>

        <div className="card-actions" title="Atividades dos kits pedagógicos">
          <img
            src={atividadeKits}
            alt="Atividades dos kits pedagógicos"
            className="add-border"
          />
          <h2>Atividades dos kits pedagógicos</h2>
        </div>
        <div className="card-actions" title="Cestas básicas entregues">
          <img
            src={cestasBasicas}
            alt="Cestas básicas entregues"
            className="add-border"
          />
          <h2>Cestas básicas entregues</h2>
        </div>
        <div
          className="card-actions"
          title="Kit de material de limpeza e higiene pessoal"
        >
          <img
            src={kitLimpeza}
            alt="Kit de material de limpeza e higiene pessoal"
            className="add-border"
          />
          <h2>Kit de material de limpeza e higiene pessoal</h2>
        </div>
        <div
          className="card-actions"
          title="Kits pedagógicos, entregues para o acompanhamento feito a distância"
        >
          <img
            src={kitPedagogico}
            alt="Kits pedagógicos, entregues para o acompanhamento feito a distância"
            className="add-border"
          />
          <h2>
            Kits pedagógicos, entregues para o acompanhamento feito a distância
          </h2>
        </div>
        <div
          className="card-actions"
          title="Doação e EPIS para o Centro comunitário Mario Andrade no Ibura"
        >
          <img
            src={epis}
            alt="Doação e EPIS para o Centro comunitário Mario Andrade no Ibura"
            className="add-border"
          />
          <h2>
            Doação e EPIS para o Centro comunitário Mario Andrade no Ibura
          </h2>
        </div>
      </div>
    </PageLayout>
  );
}
