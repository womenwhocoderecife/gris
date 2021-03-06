import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <section id="footer">
      <div className="text-footer">
        <div className="gris-name">
          <b>© Gris - Espaço Solidário Casa Maria de Lourdes</b>. 2020
        </div>
        <div className="wdp-name">
          Desenvolvido por{" "}
          <b>
            <a
              href="http://womendevprojects.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {" "}
              Women Dev Projects
            </a>
          </b>
          .
        </div>
      </div>
    </section>
  );
}
