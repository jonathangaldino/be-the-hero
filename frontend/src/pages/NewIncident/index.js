import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Info, InfoHeader, P, Form } from "./styles";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const payload = { title, description, value };

    try {
      await api.post("/incidents", payload, {
        headers: {
          Authorization: ongId
        }
      });

      alert("O caso foi criado");

      history.push("/profile");
    } catch (err) {
      alert(`Não foi possível criar um novo caso. Tente novamente.`);
    }
  }

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

        <Form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
