import React, { Fragment } from "react";

import './curriculum.css';

import data from './curriculum.json';

function Curriculum() {
    return (
        <Fragment>
        <section>
            <h2>Perfil Pessoal</h2>
            <p>{data.resumo}</p>
        </section>
        <section>
            <h2>Histórico Profissional</h2>
            <ul>
                {data.experiencia.map ((item, index) => (
                    <li key={index}>
                        {item.titulo} ({item.descricao}, ({item.dataInicio}) - {item.dataFim})
                    </li>
                ))}
            </ul>
        </section>
        <section>
            <h2>Hard Skills</h2>
            <p>{data.hard}</p>
        </section>
        <section>
            <h2>Soft Skills</h2>
            <p>{data.soft}</p>
        </section>

        </Fragment>
    )
};

export default Curriculum;