import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';
import Image from 'next/image';
import clipboardCopy from 'clipboard-copy';


function Footer() {
  const { darkMode, notIndex } = useContext(AppProvider);

  const handleCopy = () => {
    alert('Link de email copiado!')
    clipboardCopy('jonathankarlinski57@gmail.com');
  };

  return (
    <section
      className={`footer-container ${darkMode} ${!notIndex && 'footer-fixed'}`}
      id='CONTATO'>
      <p>WEBSITE DESENVOLVIDO POR JONATHAN KARLINSKI</p>
      <div className="footer-container-contact">
        <h1>CONTATO</h1>
        <div className="footer-container-contact-icon">
          <button
            type='button'
            onClick={() => handleCopy()}
          >
            <Image
              width="50"
              height="50"
              sizes="100vw"
              src={'/images/iconGmail.png'}
              alt='Logo do Gmail'
            />
          </button>
          <a
            href='https://www.linkedin.com/in/jonathankarlinski/'
            target="_blank" rel="noreferrer"
          >
            <Image
              width="50"
              height="50"
              sizes="100vw"
              src={'/images/iconLinkedin.png'}
              alt='Logo do Linkedin'
            />
          </a>
          <a
            href='https://github.com/jonathankarlinski'
            target="_blank" rel="noreferrer"
          >
            <Image
              width="50"
              height="50"
              sizes="100vw"
              src={'/images/iconGithub.png'}
              alt='Logo do Github'
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;