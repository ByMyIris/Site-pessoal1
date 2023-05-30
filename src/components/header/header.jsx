import React from 'react';
import iris from '../../assets/iris.jpeg';

import './header.css';

function Header(props) {

    const { nome, cargo, foto } = props.informacoes;

    return (
        <header>
            <img src={foto} alt="Foto de perfil"/>
            <h1 id='nome-perfil'>{nome}</h1>
            <h3 id='eventoSubtitulo'>{cargo}</h3>
        </header>
    )
}

export default Header;