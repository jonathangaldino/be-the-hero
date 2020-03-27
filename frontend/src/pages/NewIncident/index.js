import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Info, InfoHeader, P, Form } from "./styles";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Info>
          <img src={logoImg} alt="Be The Hero" />

          <InfoHeader>Cadastrar novo caso</InfoHeader>

          <P>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </P>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" /> Voltar para home
          </Link>
        </Info>

        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="WhatsApp" />

          <input placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
