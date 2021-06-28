import React from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';

import Texto from '../../components/Texto';

import estilos from './estilos';

import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

const frutas = [
  {
    nome: "Tomate",
    imagem: require("../../../assets/frutas/Tomate.png"),
  },
  {
    nome: "Brócolis",
    imagem: require("../../../assets/frutas/Brócolis.png"),
  },
  {
    nome: "Batata",
    imagem: require("../../../assets/frutas/Batata.png"),
  },
  {
    nome: "Pepino",
    imagem: require("../../../assets/frutas/Pepino.png"),
  },
  {
    nome: "Abóbora",
    imagem: require("../../../assets/frutas/Abóbora.png"),
  },
]

export default function Cesta() {
  return <ScrollView>
    <Image 
      source={topo}
      style={estilos.topo}
    />
    <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

    <View style={estilos.cesta}>
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

      <Texto style={estilos.tituloItens}>Itens da cesta</Texto>

      {frutas.map(({ nome, imagem }) => 
        <View key={nome} style={estilos.item}>
          <Image source={imagem} style={estilos.itemImagem} />
          <Texto style={estilos.itemNome}>{ nome }</Texto>
        </View>
      )}
    </View>
  </ScrollView>
}
