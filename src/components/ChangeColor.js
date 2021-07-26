import React, { useState } from 'react';

const ChangeColor = () => {

    const [color, setColor] = useState('Amarelo');

    const changeTextColor = () => {
        if(color === 'Amarelo'){
            setColor('Azul');
        }
        else{
            setColor('Amarelo');
        }     
    }

    return (
        <>
            <h1
                className={color}
                onClick={changeTextColor}
            >
                Troca a cor
            </h1>
        </>
    )
}

export default ChangeColor;