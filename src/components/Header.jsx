import React, { useContext, useState, useEffect } from 'react'
import AppProvider from '../context/AppContext';
import { Link } from 'react-scroll';
import Image from 'next/image'
import { itensButtonHeader } from '../utils/data';
import iconSol from '../../public/images/iconSol.png';
import iconLua from '../../public/images/iconLua.png';
import iconOpenDark from '../../public/images/iconOpenDark.png'
import iconCloseDart from '../../public/images/iconCloseDart.png'
import iconOpenLight from '../../public/images/iconOpenLight.png'
import iconCloseLight from '../../public/images/iconCloseLight.png'

function Header() {
  const { darkMode, setdarkMode } = useContext(AppProvider);
  const [isOpen, setIsOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(null);
  const [typeMenuOpen, setTypeMenuOpen] = useState(iconOpenDark);
  const [typeMenuClose, setTypeMenuClose] = useState(iconCloseDart);


  const typeMenu = () => {
    if (darkMode === 'dark') {
      setTypeMenuOpen(iconOpenLight)
      setTypeMenuClose(iconCloseLight)
    } else {
      setTypeMenuOpen(iconOpenDark)
      setTypeMenuClose(iconCloseDart)
    }
  }

  const typeMode = () => {
    typeMenu()
    if (darkMode === 'light') {
      return setdarkMode('dark')
    } else {
      return setdarkMode('light')
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='home'>
      <header className={`header-container ${darkMode}`}>
        {windowWidth < 800 ? (
          <div className="header-container-dropdown">
            <button className="header-container-dropdown-button" onClick={handleToggle}>
              <Image
                layout="responsive"
                height={100}
                width={100}
                src={!isOpen ? typeMenuOpen : typeMenuClose}
                alt={`icone de menu ${!isOpen ? 'fechado' : 'aberto'}`} />
            </button>
            {isOpen && (
              <div className='dropdown-menu' >
                <ul>
                  {itensButtonHeader.map((item) => (
                    <li className='dropdown-item' key={item.name}>
                      <Link activeClass="active"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleToggle}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <nav>
            <ul className="header-container-links" >
              {itensButtonHeader.map((item) => (
                <li key={item.name}>
                  <Link activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleToggle}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <button
          className={`${darkMode}`}
          type='butoon'
          onClick={() => typeMode()}
        >
          <Image
            src={darkMode === 'dark' ? iconLua : iconSol}
            width={100}
            height={100}
            alt={`icone de ${darkMode === 'dark' ? 'lua' : 'sol'}`}
          />
        </button>
      </header>
      <div className='header-container-banner'>
        <h1>
          OLA!
          <br />
          BEM-VINDO(A) AO MEU PORTIFÓLIO
        </h1>
      </div>
    </div >
  );
}

export default Header;