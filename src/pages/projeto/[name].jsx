import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { projectsData } from '@/utils/data';
import Footer from '@/components/Footer';
import Image from 'next/image';
import AppProvider from '../../context/AppContext';

export default function ProjectPage() {
  const { darkMode } = useContext(AppProvider);
  const router = useRouter();
  const { name } = router.query;
  const [data, setData] = useState({});

  const getProjectByName = (res) => {
    return projectsData.find((project) => project.name === res) || null;
  };

  useEffect(() => {
    if (!getProjectByName(name)
    ) {
      router.push('/404');
    }
    return setData(getProjectByName(name))
  }, [name, router]);

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
