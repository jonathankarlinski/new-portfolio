import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';
import ButtonEmail from './ButtonEmail';
import LinkSocial from './LinkSocial';

function Footer() {
  const { darkMode } = useContext(AppProvider);

  return (
    <footer
      className={`footer-container ${darkMode}`}
     >
      <p>WEBSITE DESENVOLVIDO POR JONATHAN KARLINSKI</p>
      <div className="footer-container-contact">
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
    </footer>
  );
}

export default Footer;