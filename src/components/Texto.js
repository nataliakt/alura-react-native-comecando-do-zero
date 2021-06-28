import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) {
  let estilo = estilos.texto;

  if (style?.fontWeight === "bold") {
    estilo = estilos.negrito;
  }
  return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "normal",
  },
  negrito: {
    fontFamily: "Montserrat_700Bold",
    fontWeight: "normal",
  }
});
