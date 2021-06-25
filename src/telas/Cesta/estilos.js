import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;

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
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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
  }
});

export default estilos;
