import React, { useState } from 'react';

const Calc = () => {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState();

  const soma = (evento) => {
    evento.preventDefault();
    setResultado(parseFloat(num1) / parseFloat(num2));
  }

  return (
    <>
      <h2>Calculadora</h2>
      <form>
        <div>
          <label>
            Número 1:
            <input value={num1} onChange={(e)=>{setNum1(e.target.value)}}/>
          </label>
        </div>
        <div>
          <label>
            Número 2:
            <input value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
          </label>
        </div>
        <button onClick={soma}>Soma</button>
      </form>
      <h1>Resultado: {resultado}</h1>
    </>
  );
}

export default Calc;