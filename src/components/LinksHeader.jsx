import { itensButtonHeader } from '@/utils/data';
import Image from 'next/image';
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import AppProvider from '../context/AppContext';

function LinksHeader() {
  const { handleToggle, isOpen, typeMenuOpen, typeMenuClose } = useContext(AppProvider);
  const [windowWidth, setWindowWidth] = useState(null);

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
    <>
      {windowWidth < 800 ? (
        <div className="header-container-dropdown">
          <button className="header-container-dropdown-button" onClick={handleToggle}>
            <Image
              height={100}
              width={100}
              priority
              src={`/images/${!isOpen ? typeMenuOpen : typeMenuClose}.png`}
              alt={`icone de menu ${!isOpen ? 'fechado' : 'aberto'}`}
            />
          </button>
          {isOpen && (
            <div className='dropdown-menu' >
              <ul>
                {itensButtonHeader.map((item) => (
                  <li className='dropdown-item' key={item.name}>
                    <Link activeClass="active"
                      to={item.name}
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
                  to={item.name}
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
    </>
  );
}

export default LinksHeader;