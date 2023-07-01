import React, { useEffect, useState, useContext } from 'react';
import AppProvider from '../../context/AppContext';
import Head from 'next/head'
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { parse } from 'url';
import { getCookie, setCookie } from '../../utils/cookies';
import { projectsData } from '@/utils/data';

export default function ProjectPage() {
  const { darkMode, windowWidth } = useContext(AppProvider);
  const [data, setData] = useState({});

  const getProjectByName = (url) => {
    return projectsData.find((project) => project.validateUrl === url) || null;
  }

  useEffect(() => {
    const url = parse(window.location.href);
    const pathname = decodeURIComponent(url.pathname).replace('/projetos/', '').toLocaleLowerCase()
    if (!getProjectByName(pathname)) {
      router.push('/404');
    } else {
      setCookie('value', JSON.stringify(getProjectByName(pathname)))
    }
    setData(JSON.parse(getCookie('value')));
  }, []);

  const dynamicWidth = ((windowWidth < 800 && windowWidth > 0) ? '100%' : '60%');

  return (
    <>
      <Head>
        <title>{data.name ? `Projeto ${data.name}` : 'Carregando'}</title>
      </Head>
      <Header />
      {data.thumbnail && (
        <main className={`project-container ${darkMode}`}>
          <div className='project-container-box'>
            <Image
              priority
              src={`/images/${data.thumbnail}.png`}
              alt={`Imagem do Projeto ${data.name}`}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: dynamicWidth, height: 'auto', borderRadius: '1rem' }}
            />
            <div className='project-container-box-details'>
              <div className='project-container-box-details-title'>
                <h1>{data.name}</h1>
              </div>
              <div className='project-container-box-details-infos'>
                <p>{data.description}</p>
              </div>
              <div className='project-container-box-details-button'>
                {data.linkProject &&
                  <a
                    href={data.linkProject}
                    target="_blank" rel="noreferrer"
                  >
                    Testar Projeto
                  </a>
                }
                <a
                  href={data.linkRepository}
                  target="_blank" rel="noreferrer"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  )
}
