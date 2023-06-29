import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../utils/data';
import { setCookie } from '../utils/cookies';

function Projects() {
  const { darkMode } = useContext(AppProvider);




  const getProjectByName = (res) => {
    const data = projectsData.find((project) => project.name === res) || null;
    setCookie('value', JSON.stringify(data))
  };

  return (
    <section
      className={`projects-container ${darkMode}`}
      id="PROJETOS"
    >
      <h1>PROJETOS</h1>
      <div className="projects-container-projects">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`projects-container-projects-box  ${project.name === "Em Obras" && "work"}`} >
            <button type='button' onClick={() => getProjectByName(project.name)}>
              <Link
                style={{ backgroundColor: '#3E7BA3' }}
                href={`/projetos/${project.name}`}

              >
                <Image
                  className={'projects-container-projects-box-img'}
                  src={`/images/${project.thumbnail}.png`}
                  alt={project.name === "Em Obras"
                    ? 'Imagem de Projeto em obra' : `Imagem do Projeto ${project.name}`}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </button>
            <div className="projects-container-projects-box-details">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <div className="projects-container-projects-box-button">
              {project.linkProject &&
                <a
                  href={project.linkProject}
                  target="_blank" rel="noreferrer"
                >
                  Testar Projeto
                </a>
              }
              <a
                href={project.linkRepository}
                target="_blank" rel="noreferrer"
              >
                Repositorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section >
  );
}

export default Projects;