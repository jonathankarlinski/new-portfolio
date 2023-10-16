import React, { useContext, useEffect } from 'react'
import AppProvider from '../context/AppContext';
import { useRouter } from 'next/router';
import Image from 'next/image'
import LinksHeader from './LinksHeader';
import { getCookie, setCookie } from '@/utils/cookies';
import ButtonEmail from './ButtonEmail';
import LinkSocial from './LinkSocial';

function Header() {
  const { darkMode, setdarkMode, setTypeMenuOpen, setTypeMenuClose, notIndex, setNotIndex } = useContext(AppProvider);
  const router = useRouter();

  const typeMenu = () => {
    if (darkMode === 'dark') {
      setTypeMenuOpen('iconOpenLight')
      setTypeMenuClose('iconCloseLight')
    } else {
      setTypeMenuOpen('iconOpenDark')
      setTypeMenuClose('iconCloseDark')
    }
  }

  useEffect(() => {
    if (darkMode === undefined) {
      setCookie('theme', 'dark')
      setdarkMode(getCookie('theme'))
    }
    setdarkMode(getCookie('theme'))
    const url = router.pathname;
    if (url === '/projetos/[name]') {
      setNotIndex(false)
    } else {
      setNotIndex(true)
    }
  });

  const typeMode = () => {
    typeMenu()
    if (darkMode === 'light') {
      setCookie('theme', 'dark')
      setdarkMode(getCookie('theme'))
    } else {
      setCookie('theme', 'light')
      setdarkMode(getCookie('theme'))
    }
  }

  const backPreviousPage = () => {
    router.back();
  };

  return (
    <div id='HOME'>
      <header className={`header-container ${darkMode} ${notIndex && 'header-fixed'}`}>
        {
          notIndex ? <LinksHeader /> :
            (
              <div className='header-container-back'>
                <button
                  onClick={backPreviousPage}>
                  <Image
                    src={`/images/${darkMode === 'dark' ? 'iconBackDark' : 'iconBackLight'}.png`}
                    width={100}
                    height={100}
                    alt={`icone de ${darkMode === 'dark' ? 'lua' : 'sol'}`}
                  />
                  <p>Voltar</p>
                </button>
              </div>
            )}
        <button
          className={`${darkMode}`}
          type='butoon'
          onClick={() => typeMode()}
        >
          <Image
            src={`/images/${darkMode === 'dark' ? 'iconLua' : 'iconSol'}.png`}
            width={100}
            height={100}
            alt={`icone de ${darkMode === 'dark' ? 'lua' : 'sol'}`}
            priority
          />
        </button>
      </header>
      <div className='header-container-banner'>
        <div className='header-container-banner-div'>
          <div className='header-container-banner-div-text'>
            <p>
              Olá, Tudo bem?
              <br />
              <b>
                Eu sou desenvolvedor web
              </b>
              <br />
              e este é meu portfólio
            </p>
            <ul>
              <li>
                <ButtonEmail />
              </li>
              <li>
                <LinkSocial
                  link={'https://www.linkedin.com/in/jonathankarlinski/'}
                  src={'/images/iconLinkedin.png'}
                  alt={'Logo do Linkedin'}
                />
              </li>
              <li>
                <LinkSocial
                  link={'https://github.com/jonathankarlinski'}
                  src={'/images/iconGithub.png'}
                  alt={'Logo do Github'}
                /></li>
            </ul>
          </div>
          <div
            className='header-container-banner-div-image'
          >
            <Image
              src={`/images/ImageBanner.png`}
              width={500}
              height={500}
              alt="imagem do banner"
              priority
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;