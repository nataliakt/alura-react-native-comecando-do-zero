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
  },
  botao: {
    marginTop: 16,
    paddingVertical: 16,
    backgroundColor: "#2A9F85",
    borderRadius: 6,
  },
  botaoTexto: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
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
    marginLeft: 11
  },
});

export default estilos;
