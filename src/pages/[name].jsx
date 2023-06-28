import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { projectsData } from '../utils/data';
import { parse } from 'url';
import Header from '@/components/Header';

export default function ProjectPage() {
  const [data, setData] = useState({});

  const router = useRouter();
  const getProjectByName = (name) => {
    return projectsData.find((project) => project.validateUrl === name) || null;
  };

  const validateUrl = (pathname) => {
    const stringSemBarra = pathname.substring(1).toLocaleLowerCase();
    const stringDecodificada = decodeURIComponent(stringSemBarra);
    if (!getProjectByName(stringDecodificada) || stringDecodificada.toLocaleLowerCase() !== (getProjectByName(stringDecodificada).name).toLocaleLowerCase()
    ) {
      router.push('404');
    }
    setData(getProjectByName(stringDecodificada))
  }

  useEffect(() => {
    const url = parse(window.location.href);
    const pathname = url.pathname;
    if (pathname !== '/') {
      validateUrl(pathname)
    }
  }, []);

  // console.log('ppppppppppppppp', data);
  return (
    <>
      <Head>
        <title>{`Projeto ${data.name}`}</title>
      </Head>
      <Header />
    </>
  )
}
