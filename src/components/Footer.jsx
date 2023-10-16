import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';
import Image from 'next/image';
import ButtonEmail from './ButtonEmail';
import LinkSocial from './LinkSocial';


function Footer() {
  const { darkMode, notIndex } = useContext(AppProvider);

  return (
    <section
      className={`footer-container ${darkMode} ${!notIndex && 'footer-fixed'}`}
      id='CONTATO'>
      <p>WEBSITE DESENVOLVIDO POR JONATHAN KARLINSKI</p>
      <div className="footer-container-contact">
        <h1>CONTATO</h1>
        <div className="footer-container-contact-icon">
          <ButtonEmail />
          <LinkSocial
            link={'https://www.linkedin.com/in/jonathankarlinski/'}
            src={'/images/iconLinkedin.png'}
            alt={'Logo do Linkedin'}
          />
          <LinkSocial
            link={'https://github.com/jonathankarlinski'}
            src={'/images/iconGithub.png'}
            alt={'Logo do Github'}
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;