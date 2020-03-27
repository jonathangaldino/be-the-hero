import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Container, Delete, Title } from "./styles";

export default function Incident() {
  return (
    <Container>
      <Title>CASO:</Title>
      <p>Caso teste</p>

      <Title>DESCRIÇÃO:</Title>
      <p>Descrição teste</p>

      <Title>VALOR:</Title>
      <p>R$ 120,00</p>

      <Delete type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </Delete>
    </Container>
  );
}
