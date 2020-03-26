import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Section, Form, FormHeader } from "./styles";

import heroisImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

function Logon() {
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <FormHeader>Faça seu logon</FormHeader>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" /> Não tenho cadastro
          </Link>
        </Form>
      </Section>

      <img src={heroisImg} alt="Heroes" />
    </Container>
  );
}

export default Logon;
