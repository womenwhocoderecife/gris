import React from "react";
import "./WhereWeAre.css";

export default function Services() {
  return (
    <section>
      <div className="map">
        <p className="map-title"> onde estamos </p>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.573998710754!2d-34.96229708583211!3d-8.04277849420867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1bdb19c9a137%3A0x96c0a7ea168c3fa8!2sR.%20Diogo%20Barbosa%20Machado%2C%2015%20-%20V%C3%A1rzea%2C%20Recife%20-%20PE%2C%2050810-290!5e0!3m2!1spt-BR!2sbr!4v1581179143138!5m2!1spt-BR!2sbr"
          style={{
            width: "100%",
            height: "200px",
            frameborder: "0px",
            border: "none"
          }}
        ></iframe>
        <div className="map-description">
          <p>
            Rua Diogo Barbosa Machado, num.15, Várzea. Recife - PE - Brasil.
            CEP: 50132-90
          </p>
          <p> Email: contato@gris.com.br | Tel: 3241.8765 </p>
        </div>
      </div>
    </section>
  );
}
