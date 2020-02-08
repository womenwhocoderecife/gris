import React from 'react'
import './HowToContribute.css'

import iconeBazar from '../../assets/IconeBazar.png'
import IconeDoaoces from '../../assets/IconeDoaoces.png'
import IconeLojinha from '../../assets/IconeLojinha.png'

export default function HowToContribute() {
    return (
        <section id="HowToContribute">
           <h2>Como contribuir</h2>
           <div className="icons">
              <div className="icons-card" title="Doações">
                <img src={IconeDoaoces} alt="ícone doações" />
                Doações
               </div>
               <div className="icons-card" title="Bazar">
                <img src={iconeBazar} alt="ícone bazar" />
                Bazar
               </div>
               <div className="icons-card" title="Lojinha">
                <img src={IconeLojinha} alt="ícone lojinha" />
                Lojinha
               </div>
           </div>
            <button type="button">Quero ser voluntário</button>
        </section>
    )
}
