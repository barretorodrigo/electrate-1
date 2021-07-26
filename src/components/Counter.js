import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const remove = () => {
        setCount(count - 1);
    }

    const double = () => {
        setCount(count * 2);
    }

    return (
        <>
            <h1>Contador</h1>
            <h2>Resultado: {count}</h2>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <button onClick={double}>x2</button>
        </>
    );
}

export default Counter;