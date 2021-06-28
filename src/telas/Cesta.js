import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Topo from '../components/Topo';
import Detalhes from '../components/Detalhes';
import Itens from '../components/Itens';

export default function Cesta() {
  return <ScrollView>
    <Topo titulo="Detalhes da cesta" />

    <View style={estilos.cesta}>
      <Detalhes />

      <Itens />
    </View>
  </ScrollView>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
