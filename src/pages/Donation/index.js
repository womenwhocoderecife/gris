import React from "react";
import "./donationStyle.css";

export default function Donation() {
    return (
    <section id="queroDoar">
        <div className="title">QUERO DOAR</div>
        <div className="what2Donate">
            <h1>O QUE PODE SER DOADO?</h1>
            <div className="paragraphs">
            <p className="textBody">
            O Gris Espaço Solidário - Casa Maria de lourdes recebe variados tipos de doação. Desde alimentos para o lanche das crianças, alimentos para as cestas básicas das famílias atendidas, materiais de artesanato para oficinas, material pedagógico, jogos, material de expediente. Também recebemos doação de móveis, eletrodomesticos, eletroeletronicos para reparo e redirecionamento para as famílias. 
            </p>
            <p className="textBody">
            Temos um bazar solidário, onde aceitamos doações de roupas, sapatos, acessórios que é uma forma de reverter fundos pra o funcionamento do nosso espaço.
            </p>
            </div>
        </div>
        <div className="how2Donate">
            <h1>COMO DOAR?</h1>
            <p className="textBody">
            As doações podem ser entregues no próprio espaço, ou podemos ver uma maneira de ir buscá-las, para isso entrar em contato em (81) 3241.8765. </p>
            <p className="textBody">
            Para doações em dinheiro, transferir para a conta:
            </p>
        </div>
        <div className="account">
            <p className="caixa">Caixa Econômica Federal</p>
            Agência: 0678m <br></br>
            Op: 013 <br></br>
            Conta: 00070481-3 <br></br>
            CPF: 06120487484 <br></br>
            Joice Poliana da Paixão Sales 
        </div>
    </section>
    );
}
