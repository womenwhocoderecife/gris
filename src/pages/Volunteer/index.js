import React, { useState } from "react";
import InputMask from "react-input-mask";
import PageLayout from "../../components/PageLayout";
import sendMail from "../../services/sendEmail";
import "./volunteer.css";

export default function Volunteer() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  let selectedActivities = [];

  const handleChange = (event) => {
    const auxValues = { ...values };
    event.target.value.trim() === ""
      ? event.target.setCustomValidity("Preencha este campo.")
      : event.target.setCustomValidity("");

    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const handleCheckboxChange = (event) => {
    selectedActivities.includes(event.target.value)
      ? (selectedActivities = selectedActivities.filter(
          (activity) => activity !== event.target.value
        ))
      : selectedActivities.push(event.target.value);

    values.atividades = selectedActivities.join(", ");
    setValues(values);
  };

  const clearForm = () => {
    document.querySelector("#celular").value = "";
    document.querySelector("#contato").reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await sendMail(values);
    response?.text === "OK"
      ? alert("Enviado com sucesso!")
      : alert("Tente mais tarde!");

    clearForm();
    setLoading(false);
  };

  return (
    <PageLayout title="Quero ser voluntário">
      <form id="contato" onSubmit={handleSubmit}>
        <div className="volunteer">
          <div className="personal-data">
            <h2>Dados pessoais</h2>
            <input
              type="text"
              placeholder="Nome Completo*"
              name="nome"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Endereço*"
              name="endereco"
              required
              onChange={handleChange}
            />
            <InputMask
              type="tel"
              placeholder="Celular* 00 00000-0000"
              name="celular"
              required
              mask="(99) 99999-9999"
              onChange={handleChange}
              id="celular"
            />
            <input
              type="email"
              placeholder="E-mail*"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="activities">
            <h2>Tenho interesse nas seguintes atividades:</h2>
            <div className="activity">
              <input
                type="checkbox"
                name="atividade-educação"
                value="Educação"
                onChange={handleCheckboxChange}
              />
              Educação
            </div>
            <div className="activity">
              <input
                type="checkbox"
                name="atividade-atendimento-médico"
                value="Atendimento médico"
                onChange={handleCheckboxChange}
              />
              Atendimento médico
            </div>
            <div className="activity">
              <input
                type="checkbox"
                name="atividade-acompanhamento-terapêutico"
                value="Acompanhamento terapêutico"
                onChange={handleCheckboxChange}
              />
              Acompanhamento terapêutico
            </div>
            <div className="activity">
              <input
                type="checkbox"
                name="atividade-capacitação-profissional"
                value="Capacitação profissional"
                onChange={handleCheckboxChange}
              />
              Capacitação profissional
            </div>
            <div className="activity">
              <input
                type="checkbox"
                name="atividade-acompanhamento-social"
                value="Acompanhamento social"
                onChange={handleCheckboxChange}
              />
              Acompanhamento social
            </div>
          </div>
        </div>
        <button type="submit" className="volunteer-button" title="Enviar">
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </PageLayout>
  );
}
