import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';

function About() {
  const { darkMode } = useContext(AppProvider);

  return (
    <section
      className={`about-container ${darkMode}`}
      id='Sobre'>
      <h1>SOBRE MIM</h1>
      <div className="about-container-box">
        <p>
        Olá, sou Jonathan, um desenvolvedor web se especializado em front-end. Tenho ampla experiência em tecnologias como <span>React.js</span>, <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>. Meus projetos estão disponíveis via <span>GitHub Pages</span> e <span>Vercel</span>, onde você pode conferir meus trabalhos na parte de projetos. No momento, estou aprimorando minhas habilidades em <span>Next.js</span>, <span>Styled-Components</span> e <span>Material UI</span>. Estou comprometido em aperfeiçoar meu conhecimento e criar experiências web excepcionais.
        </p>
      </div>
    </section>
  );
}

export default About;