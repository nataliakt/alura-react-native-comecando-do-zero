import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from './Texto';

const frutas = [
  {
    nome: "Tomate",
    imagem: require("../../assets/frutas/Tomate.png"),
  },
  {
    nome: "Brócolis",
    imagem: require("../../assets/frutas/Brócolis.png"),
  },
  {
    nome: "Batata",
    imagem: require("../../assets/frutas/Batata.png"),
  },
  {
    nome: "Pepino",
    imagem: require("../../assets/frutas/Pepino.png"),
  },
  {
    nome: "Abóbora",
    imagem: require("../../assets/frutas/Abóbora.png"),
  },
];

export default function Itens() {
  return <>
    <Texto style={estilos.tituloItens}>Itens da cesta</Texto>

    {frutas.map(({ nome, imagem }) => 
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
