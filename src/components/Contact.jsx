import React, { useContext, useState } from 'react';
import emailjs from '@emailjs/browser'
import AppProvider from '../context/AppContext';
import { contact } from '@/utils/secret';


function Contact() {
  const { darkMode } = useContext(AppProvider);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const regexEmail = /^(?=.{1,256})(?=.{1,64}@.{1,255})(?=.{1,64}@.{1,253}\.[a-zA-Z]{2,63})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;


  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send(contact.service, contact.template, templateParams, contact.token)
      .then((_response) => {
        alert("Email enviado com sucesso");

        setName('')
        setEmail('')
        setMessage('')

      }, (err) => {
        console.log("ERRO: ", err)
      })

  }

  return (
    <div
      className={`contact-container ${darkMode}`}
      id='Contato'
    >
      <h1>CONTATO</h1>

      <p>
        Tem alguma pergunta sobre um projeto que já desenvolvi ou gostaria de discutir uma possível colaboração? Ou até mesmo um feedback é muito bem-vindo. Por favor, deixe uma mensagem abaixo, e retornarei o mais breve possível.
      </p>

      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button
          type="submit"
          disabled={!regexEmail.test(email) || name === '' || message === ''}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;