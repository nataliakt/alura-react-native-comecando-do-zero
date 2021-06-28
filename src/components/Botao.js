import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';

export default function Botao({ texto, style }) {
  return <TouchableOpacity style={[estilos.botao, style]}>
    <Texto style={estilos.botaoTexto}>{ texto }</Texto>
  </TouchableOpacity>
}

const estilos = StyleSheet.create({
  botao: {
    paddingVertical: 16,
    backgroundColor: "#2A9F85",
    borderRadius: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  botaoTexto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
});