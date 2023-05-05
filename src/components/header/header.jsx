import React from 'react';
import iris from '../../assets/iris.jpeg';

import './header.css';

function Header() {
    return (
        <header>
            <img src={iris} alt="Foto de Iris"/>
            <h1>Iris Alencar</h1>
            <h3>Instrutora de programação</h3>
        </header>
    )
}

export default Header;