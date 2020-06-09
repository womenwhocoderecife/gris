import React from "react";
import "./WhereWeAre.css";
import location from "../../../../assets/images/icon-location.png";
import email from "../../../../assets/images/icon-email.png";
import phone from "../../../../assets/images/icon-phone.png";
import facebook from "../../../../assets/images/icon-fb.png";
import instagram from "../../../../assets/images/icon-ig.png";
import youtube from "../../../../assets/images/icon-yt.png";

export default function Services() {
    return (
        <div className="where-we-are">
            <p className="map-title"> onde estamos </p>
            <div className="map">
                <iframe
                    title="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.573998710754!2d-34.96229708583211!3d-8.04277849420867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1bdb19c9a137%3A0x96c0a7ea168c3fa8!2sR.%20Diogo%20Barbosa%20Machado%2C%2015%20-%20V%C3%A1rzea%2C%20Recife%20-%20PE%2C%2050810-290!5e0!3m2!1spt-BR!2sbr!4v1581179143138!5m2!1spt-BR!2sbr"
                    style={{
                        width: "45%",
                        height: "300px",
                        frameborder: "0px",
                        border: "none"
                    }}
                />
                <div className="map-description">
                    <div className="map-description-itens">
                        <img src={location} alt="Ícone do globo terra"/>
                        <p>
                            Rua Diogo Barbosa Machado, num.15, Várzea. Recife - PE - Brasil. CEP: 50132-90
                        </p>
                    </div>
                    <div className="map-description-itens">
                        <img src={email} alt="Ícone de um @"/>
                        <p>
                            contato@gris.com.br
                        </p>
                    </div>
                    <div className="map-description-itens">
                        <img src={phone} alt="Ícone de telefone"/>
                        <p>
                            (81) 3241.8765
                        </p>
                    </div>

                    <div className="social">
                        <p>
                            Acompanhe nossas redes:
                        </p>
                        <div className="social-itens">
                            <img src={facebook} alt="Ícone do globo terra"/>
                            <img src={instagram} alt="Ícone do globo terra"/>
                            <img src={youtube} alt="Ícone do globo terra"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
