import React, { useState, useRef } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { Container, Section, Form, FormHeader } from "./styles";

import heroisImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

function Logon() {
  const [id, setId] = useState("");
  const inputId = useRef(null);

  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const { data } = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", data.ong.name);

      history.push("/profile");
    } catch (err) {
      alert(`Erro ao realizar logon. Tente novamente.`);
      setId("");
      inputId.current.focus();
    }
  }

  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogon}>
          <FormHeader>Faça seu logon</FormHeader>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
            ref={inputId}
          />
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
