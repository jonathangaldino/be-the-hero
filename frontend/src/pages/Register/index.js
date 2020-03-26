import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import {
  Container,
  Content,
  Info,
  InfoHeader,
  P,
  Form,
  InputGroup
} from "./styles";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <Container>
      <Content>
        <Info>
          <img src={logoImg} alt="Be The Hero" />

          <InfoHeader>Cadastro</InfoHeader>

          <P>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </P>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" /> Não tenho cadastro
          </Link>
        </Info>

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />

          <InputGroup>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </InputGroup>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
