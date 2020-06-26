import React from "react";
import Card from "./Components/Cards"
import PageLayout from "../../components/PageLayout";
import './Actions.css'
import actions1 from '../../assets/images/card1.png';
import actions2 from '../../assets/images/card2.png';
import actions3 from '../../assets/images/card3.png';

export default function Creations() {
    return (
        <section>
            <PageLayout title="Ações"></PageLayout>
            <div className='cards-actions'>
            <Card
             image={actions1}
             title="Acompanhamento pedagógico"
             paragraph="Atendimento de crianças e adolescentes com dificuldades e problemas de aprendizagem."
             width="100%"
            />
            <Card
             image={actions2}
             title="Reforço escolar"
             paragraph="Trabalhando as pontencialidades de cada criança de acordo com suas áreas de habilidade/interesse."
             width="90%"
            />
            <Card
             image={actions3}
             title="Acompanhamento social"
             paragraph="Cada família é acompanhada em sua totalidade; oficinas de produção criativa para crianças e mães."
             width="90%"
            />
            </div>
        </section>
    );
}
