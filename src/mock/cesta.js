import logo from '../../assets/logo.png';

const itens = [
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

const cesta = {
  titulo: "Detalhes da cesta",
  nomeCesta: "Cesta de Verduras",
  logoFazenda: logo,
  nomeFazenda: "Jenny Jack Farm",
  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
  preco: "R$ 40,00",
  botao: "Comprar",
  tituloItens: "Itens da cesta",
  itens,
}

export default cesta;