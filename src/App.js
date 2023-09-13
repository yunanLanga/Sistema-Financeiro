import React from "react";
import GlobalStyle from "./style/global";
import Header from "./components/Header";
import Resumo from "./components/Resumo";
import Formulario from "./components/Form";

const App = () => {
  return (
    <>
      <Header />
      <Resumo />
      <Formulario />
      <GlobalStyle />
    </>
  );
};

export default App;
