import React, { useContext } from "react";
import { FiPower } from "react-icons/fi";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import {
  Container,
  Header,
  Logo,
  Welcome,
  StyledLink,
  Button,
  StyledSwitch,
  IncidentsTitle,
  IncidentsUL
} from "./styles";

import logoImg from "../../assets/logo.svg";
import Incident from "../../components/Incident";

export default function Profile({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Be The Hero" />
        <Welcome>Bem vinda, APAD</Welcome>

        <StyledLink className="button" to="/incidents/new">
          Cadastrar novo caso
        </StyledLink>

        <Button type="button">
          <FiPower size={18} color="#E02041" />
        </Button>

        <StyledSwitch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </Header>

      <IncidentsTitle>Casos encontrados</IncidentsTitle>

      <IncidentsUL>
        {[1, 2, 3, 4].map(item => (
          <Incident key={item} />
        ))}
      </IncidentsUL>
    </Container>
  );
}
