import React, { useContext, useEffect } from 'react'
import AppProvider from '../context/AppContext';
import { useRouter } from 'next/router';
import Image from 'next/image'
import LinksHeader from './LinksHeader';

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
      return setdarkMode('dark')
    } else {
      return setdarkMode('light')
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
              <button
                onClick={backPreviousPage}>
                <Image
                  src={`/images/${darkMode === 'dark' ? 'iconBackDark' : 'iconBackLight'}.png`}
                  width={100}
                  height={100}
                  alt={`icone de ${darkMode === 'dark' ? 'lua' : 'sol'}`}
                /></button>
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
      {
        notIndex && (
          <div className='header-container-banner'>
            <h1 className="header-container-banner-title">
              OLA!
              <br />
              <span>
                BEM-VINDO(A) AO MEU PORTIFÓLIO
              </span>
            </h1>
          </div>
        )
      }
    </div >
  );
}

export default Header;