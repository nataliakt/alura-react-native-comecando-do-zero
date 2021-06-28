import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Botao from './Botao';

import Texto from './Texto';

export default function Detalhes({ nomeCesta, logoFazenda, nomeFazenda, descricao, preco, botao }) {
  return <>
    <Texto style={estilos.nome}>{ nomeCesta }</Texto>

    <View style={estilos.fazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda} />
      <Texto style={estilos.nomeFazenda}>{ nomeFazenda} </Texto>
    </View>

    <Texto style={estilos.descricao}>{ descricao }</Texto>

    <Texto style={estilos.preco}>{ preco }</Texto>

    <Botao texto={botao} style={estilos.botao} />
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
  }
});
