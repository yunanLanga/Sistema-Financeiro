import React, { useState } from "react";
import * as F from "./styles";

const Formulario = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSave = () => {
    if (!desc || amount) {
      alert("Informe a descricao e o valor");
      return;
    } else if (amount < 1) {
      alert("Valor tem de ser positivo");
      return;
    }
  };
  return (
    <>
      <F.Container>
        <F.InputContent>
          <F.Label> Descricao</F.Label>
          <F.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </F.InputContent>
        <F.InputContent>
          <F.Label> Valor</F.Label>
          <F.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </F.InputContent>
        <F.RadioGroup>
          <F.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <F.Label htmlFor="rIncome">Entradas</F.Label>
          <F.Input
            type="radio"
            id="rIncomes"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <F.Label htmlFor="rIncomes">Saidas</F.Label>
        </F.RadioGroup>
        <F.Button>Adicionar</F.Button>
      </F.Container>
      ;
    </>
  );
};

export default Formulario;
