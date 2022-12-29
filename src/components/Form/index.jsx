import React, { useState } from 'react'
import * as C from "./styles"
import Grid from '../Grid'

const Form = ({handleAdd,transactionsList, setTransactionsList}) => {
  const [desc, setDesc] = useState("");
  const [amount, SetAmount] = useState("");
  const [isExpense, setExpense] = useState(false)

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc,
      amount,
      expense: isExpense,
    };
    handleAdd(transaction);

    setDesc("");
    SetAmount("");
  }
  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(element) => setDesc(element.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount}
            type="number"
            onChange={(element) => SetAmount(element.target.value)}
          />
        </C.InputContent>
        <C.RadioGroupd>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor='rIncome'>Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name='group1'
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor='rExpenses'>Saídas</C.Label>
          <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.RadioGroupd>
      </C.Container>
      <Grid itens={transactionsList} setItens={transactionsList} />
    </>
  )
}

export default Form