import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

import api from "../../services/api";
import Incident from "./components/Incident";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const { data, headers } = await api.get("/incidents", {
      params: {
        page
      }
    });

    setLoading(false);
    setIncidents([...incidents, ...data.incidents]);
    setTotal(headers["x-total-count"]);
    setPage(page + 1);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident }) => <Incident incident={incident} />}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}
