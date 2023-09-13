import React from "react";
import * as R from "./styles";
import ResumoItem from "../ResumoItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resumo = () => {
  return (
    <R.Container>
      <ResumoItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1200" />
      <ResumoItem title="Saidas" Icon={FaRegArrowAltCircleDown} value="450" />
      <ResumoItem title="Total" Icon={FaDollarSign} value="750" />
    </R.Container>
  );
};

export default Resumo;
