import React from 'react'
import './HowToContribute.css'

import iconeVoluntario from '../../assets/icon-voluntario.png'
import iconeDoaoces from '../../assets/icon-doacoes.png'
import iconeBazar from '../../assets/icon-bazar.png'
import iconeLojinha from '../../assets/icon-lojinha.png'

export default function HowToContribute() {
    return (
        <section id="HowToContribute">
           <h2>Como contribuir</h2>
           <div className="icons">
              <div className="icons-card" title="Voluntário">
                <img src={iconeVoluntario} alt="Ícone volutário" />
                Voluntário
               </div>
              <div className="icons-card" title="Doações">
                <img src={iconeDoaoces} alt="Ícone doações" />
                Doações
               </div>
               <div className="icons-card" title="Bazar">
                <img src={iconeBazar} alt="Ícone bazar" />
                Bazar
               </div>
               <div className="icons-card" title="Lojinha">
                <img src={iconeLojinha} alt="Ícone lojinha" />
                Lojinha
               </div>
           </div>
        </section>
    )
}
