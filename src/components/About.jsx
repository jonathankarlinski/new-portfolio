import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';

function About() {
  const { darkMode } = useContext(AppProvider);

  return (
    <section
      className={`about-container ${darkMode}`} 
      id='about'>
      <h1>SOBRE MIM</h1>
      <div className="about-container-box">
        <p>
          Eu tenho 24 anos, atualmente moro em Porto alegre no Rio Grande do Sul. Sou uma pessoa extremamente comunicativa e extrovertida,  no meu tempo livre gosto de jogos,  ver filmes, series e tudo que me apresente novas coisas. Conheci na programação maneiras de criar e utilizar ferramentas para desenvolver projetos incríveis que são maravilhosas conquistas para mim e com isso vi o que quero para meu futuro, que é trabalhar com tecnologia para desenvolver projetos de que me orgulharei no futuro.
        </p>
      </div>
    </section>
  );
}

export default About;