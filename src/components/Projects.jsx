import Image from 'next/image';
import React, { useContext } from 'react'
import { projectsData } from '../utils/data';
import AppProvider from '../context/AppContext';

function Projects() {
  const { darkMode } = useContext(AppProvider);
  return (
    <section
      className={`projects-container ${darkMode}`}
      id="projects"
    >
      <h1>PROJETOS</h1>
      <div className="projects-container-projects">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`projects-container-projects-box  ${project.name === "Em Obras" && "work"}`} >
            <Image
              src={project.thumbnail}
              alt={project.name === "Em Obras"
                ? 'Imagem de Projeto em obra' : `Imagem do Projeto ${project.name}`}
              width={100}
              height={100}
              layout="responsive"
            />
            <div className="projects-container-projects-box-details">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
            {project.name === "Em Obras" ? "" : (
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;