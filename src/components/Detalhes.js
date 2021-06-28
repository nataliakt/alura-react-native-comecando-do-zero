import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Texto from './Texto';
import logo from '../../assets/logo.png';

export default function Detalhes() {
  return <>
    <Texto style={estilos.nome}>Cesta de Verduras</Texto>

    <View style={estilos.fazenda}>
      <Image source={logo} style={estilos.imagemFazenda} />
      <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
    </View>

    <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>

    <Texto style={estilos.preco}>R$ 40,00</Texto>

    <TouchableOpacity style={estilos.botao}>
      <Texto style={estilos.botaoTexto}>Comprar</Texto>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
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
