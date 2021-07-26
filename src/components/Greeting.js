import React from 'react';

const Greeting = ({name, age}) => {
    return (
        <>
            <h2>Olá {name}, ouvi dizer que você tem {age} anos.</h2>
            <hr />
        </>
    )
}

export default Greeting;