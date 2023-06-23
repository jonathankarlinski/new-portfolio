import React, { useContext } from 'react'
import clipboardCopy from 'clipboard-copy';
import AppProvider from '../context/AppContext';


function Footer() {
  const { darkMode } = useContext(AppProvider);

  const handleCopy = (target) => {
    alert('Link de email copiado!')

    clipboardCopy('jonathankarlinski57@gmail.com');

    setTimeout(() => {
      target.innerText = 'Share';
    }, Number('750'));
  };
  return (
    <section
      className={`footer-container ${darkMode}`} 
      id='contact'>
      <p>WEBSITE DESENVOLVIDO POR JONATHAN KARLINSKI</p>
      <div className="footer-container-contact">
        <h1>CONTATO</h1>
        <div className="footer-container-contact-icon">
          <button
            type='button'
            onClick={(target) => handleCopy(target)}
          >
            <img src="https://img.icons8.com/color/48/null/gmail--v1.png" alt='Logo do Gmail' />
          </button>
          <a
            href='https://www.linkedin.com/in/jonathankarlinski/'
            target="_blank" rel="noreferrer"
          >
            <img src="https://img.icons8.com/color/48/null/linkedin.png" alt='Logo do Linkedin' />
          </a>
          <a
            href='https://github.com/jonathankarlinski'
            target="_blank" rel="noreferrer"
          >
            <img src="https://img.icons8.com/ios-filled/50/null/github.png" alt='Logo do Github' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;