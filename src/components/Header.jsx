import React, { useContext, useState, useEffect } from 'react'
import AppProvider from '../context/AppContext';
import Image from 'next/image'
import { parse } from 'url';
import LinksHeader from './LinksHeader';
import { useRouter } from 'next/router';

function Header() {
  const { darkMode, setdarkMode, typeMenu } = useContext(AppProvider);
  const [notIndex, setNotIndex] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    const url = parse(window.location.href);
    const pathname = url.pathname;
    if (pathname !== '/') {
      setNotIndex(true)
    }
  }, []);

  return (
    <div id='HOME'>
      <header className={`header-container ${darkMode}`}>
        {
          !notIndex ? <LinksHeader /> :
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
          />
        </button>
      </header>
      {
        !notIndex && (
          <div className='header-container-banner'>
            <h1>
              OLA!
              <br />
              BEM-VINDO(A) AO MEU PORTIFÓLIO
            </h1>
          </div>
        )
      }
    </div >
  );
}

export default Header;