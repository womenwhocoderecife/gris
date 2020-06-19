import React from "react";
import './cards.css';
import actions3 from '../../../../assets/images/actions-3.jpg';
import actions2 from '../../../../assets/images/actions-2.jpg';
import actions1 from '../../../../assets/images/actions-1.jpg';

export default function Card() {
    return (
        <div className='cards'>

            <div className='card'>
                <div className='card-img fix'><img className='image' src={actions1} /></div>
                <div className='card-info'>
                    <h1 className='card-title'>Acompanhamento pedagógico</h1>
                    <p className='card-paragraph'>Atendimento de crianças e adolescentes com dificuldades e problemas de aprendizagem.</p>
                </div>
            </div>

            <div className='card-two'>
                <div className='card-img'><img className='image' src={actions2} /></div>
                <div className='card-info'>
                    <h1 className='card-title'>Reforço escolar</h1>
                    <p className='card-paragraph'>Trabalhando as pontencialidades de cada criança de acordo com suas áreas de habilidade/interesse.</p>
                </div>
            </div>

            <div className='card-three'>
                <div className='card-img'><img className='image' src={actions3} /></div>
                <div className='card-info'>
                    <h1 className='card-title'>Acompanhamento social</h1>
                    <p className='card-paragraph'>Cada família é acompanhada em sua totalidade; oficinas de produção criativa para crianças e mães.</p>
                </div>
            </div>

        </div>
    );
}
