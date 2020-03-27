import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Container, Delete, Title } from "./styles";

export default function Incident({ id, title, description, value, deleteFn }) {
  return (
    <Container>
      <Title>CASO:</Title>
      <p>{title}</p>

      <Title>DESCRIÇÃO:</Title>
      <p>{description}</p>

      <Title>VALOR:</Title>
      <p>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(value)}
      </p>

      <Delete type="button" onClick={() => deleteFn(id)}>
        <FiTrash2 size={20} color="#a8a8b3" />
      </Delete>
    </Container>
  );
}
