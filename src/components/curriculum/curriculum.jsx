import React, { Fragment } from "react";

import './curriculum.css';

import data from './curriculum.json';

function Curriculum(props) {

    const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculum;

    if(!resumo || !experienciaAcademica || !experienciaProfissional) {
        return <p>     Carregando...</p>
    }

    return (
        <>
        <section>
            <h2>Resumo</h2>
            <p>{resumo}</p>
        </section>

        <section>
            <h2>Acadêmico</h2>
            <ul>
                {experienciaAcademica.map ((item, index) => (
                    <li key={index}>
                        <b> (({item.dataInicio}) - {item.dataFim}) </b> {item.titulo};
                    </li>
                ))}
            </ul>
        </section>

        <section>
            <h2>Profissional</h2>
            <ul>
                {experienciaProfissional.map ((item, index) => (
                    <li key={index}>
                        <b> (({item.dataInicio}) - {item.dataFim}) </b> {item.titulo};
                    </li>
                ))}
            </ul>
        </section>

        </>
    )
};

export default Curriculum;