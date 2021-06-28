import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Topo from '../components/Topo';
import Detalhes from '../components/Detalhes';
import Itens from '../components/Itens';

export default function Cesta({ titulo, tituloItens, itens, ...detalhes }) {
  return <ScrollView>
    <Topo titulo={titulo} />

    <View style={estilos.cesta}>
      <Detalhes {...detalhes} />

      <Itens tituloItens={tituloItens} itens={itens} />
    </View>
  </ScrollView>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
