import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import topo from '../../assets/topo.png';
import Texto from './Texto';

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return <>
    <Image 
      source={topo}
      style={estilos.topo}
    />
    <Texto style={estilos.titulo}>{ titulo }</Texto>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },
  titulo: {
    position: "absolute",
    width: "100%",

    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    padding: 16,
  },
});
