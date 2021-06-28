import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from './Texto';

export default function Itens({ tituloItens, itens }) {
  return <>
    <Texto style={estilos.tituloItens}>{ tituloItens }</Texto>

    {itens.map(({ nome, imagem }) => 
      <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.itemImagem} />
        <Texto style={estilos.itemNome}>{ nome }</Texto>
      </View>
    )}
  </>
}

const estilos = StyleSheet.create({
  tituloItens: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
  },
  itemImagem: {
    width: 46,
    height: 46,
  },
  itemNome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
