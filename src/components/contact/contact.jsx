import React, { useState } from "react";
import './contact.css';

function Contact() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    console.log(import.meta.env.VITE_WHATSAPP_NUMBER);

    function enviarFormulario(event) {
        event.preventDefault();
        console.log("Formulario eviado!");
        
        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}/nMensagem: ${mensagem}`;

        const VITE_numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; // numero de whatsapp

        const linkWhatsapp = `https://wa.me/${VITE_numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, '_blank');
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }

        setTelefone(telefoneFormatado);
    }


    return (
        <>
        <form onSubmit={enviarFormulario}>

            <fieldset>
                <label htmlFor="input-nome">Nome</label>
                <input 
                type="text" 
                name="input-nome" 
                id="input-nome" 
                required 
                minLength="2"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-email">Email</label>
                <input 
                    type="email" 
                    name="input-email" 
                    id="input-email" 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-tel">Telefone</label>
                <input 
                    type="tel" 
                    name="input-tel" 
                    id="input-tel" 
                    placeholder="(99) 99999-9999" 
                    required 
                    pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                    maxLength="15"
                    value={telefone}
                    onChange={mascaraTelefone}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-msg">Mensagem</label>
                <textarea 
                    name="input-msg" 
                    id="input-msg" 
                    cols="30" 
                    rows="10"   
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                ></textarea>
            </fieldset>

            <center>
                <input type="submit" value="ENVIAR" className="button"/>
            </center>


        </form>

        </> 
    )
}

export default Contact;