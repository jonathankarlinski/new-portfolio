import React, { useEffect, useState, useContext } from 'react';
import AppProvider from '../../context/AppContext';
import Head from 'next/head'
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCookie, setCookie } from '../../utils/cookies';
import { parse } from 'url';
import { projectsData } from '@/utils/data';

export default function ProjectPage() {
  const { darkMode } = useContext(AppProvider);
  const [data, setData] = useState({});

  const getProjectByName = (url) => {
    const data = projectsData.find((project) => project.validateUrl === url) || null;
    if (!data) {
      router.push('/404');
    } else {
      setCookie('value', JSON.stringify(data))
    }
  }

  useEffect(() => {
    const url = parse(window.location.href);
    const pathname = decodeURIComponent(url.pathname).replace('/projetos/', '').toLocaleLowerCase()
    !getProjectByName(pathname);
    setData(JSON.parse(getCookie('value')));
  }, []);

  return (
    <>
      <Head>
        <title>{`Projeto ${data.name}`}</title>
      </Head>
      <Header />
      <main className={`project-container ${darkMode}`}>
        <div className='project-container-box'>
          <Image
            src={`/images/${data.thumbnail}.png`}
            alt={data.name === "Em Obras"
              ? 'Imagem de Projeto em obra' : `Imagem do Projeto ${data.name}`}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
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
      <Footer />
    </>
  )
}
