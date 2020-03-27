import React, { useContext, useEffect, useState } from "react";
import { FiPower } from "react-icons/fi";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { useHistory } from "react-router-dom";

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

import api from "../../services/api";

export default function Profile({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(({ data }) => setIncidents(data.incidents));
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert(`Não foi possível delete este caso. Tente novamente.`);
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Be The Hero" />
        <Welcome>Bem vinda, {ongName}</Welcome>

        <StyledLink className="button" to="/incidents/new">
          Cadastrar novo caso
        </StyledLink>

        <Button type="button" onClick={handleLogout}>
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
        {incidents.map(incident => (
          <Incident
            key={incident.id}
            id={incident.id}
            title={incident.title}
            description={incident.description}
            value={incident.value}
            deleteFn={handleDeleteIncident}
          />
        ))}
      </IncidentsUL>
    </Container>
  );
}
