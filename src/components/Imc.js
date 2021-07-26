import React, { useState } from 'react';

const Imc = () => {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState();

  const soma = (evento) => {
    evento.preventDefault();
    setResultado(parseFloat(num1) / parseFloat(num2));
  }

  return (
    <>
      <h2>IMC</h2>
      <form>
        <div>
          <label>
            Massa: 
            <input value={num1} onChange={(e)=>{setNum1(e.target.value)}}/>
          </label>
        </div>
        <div>
          <label>
            Altura:
            <input value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
          </label>
        </div>
        <button onClick={soma}>Calcula IMC</button>
      </form>
      <h1>Resultado: {resultado}</h1>
    </>
  );
}

export default Imc;