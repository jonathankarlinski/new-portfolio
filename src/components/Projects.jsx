import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';
import Image from 'next/image';
import { projectsData } from '../utils/data';
import { iconsData } from '../utils/iconsData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Projects() {
  const { darkMode } = useContext(AppProvider);

  function mapProjectIcons(project) {
    const mappedIcons = project.icons
      .map(iconName => {
        const iconData = iconsData.find(data => iconName in data);
        if (iconData) {
          return {
            name: iconData[iconName].name,
            icon: iconData[iconName].icon,
          };
        }
        return null;
      })
      .filter(icon => icon !== null);

    return mappedIcons;
  }

  return (
    <section
      id="PROJETOS"
      className={`projects-container ${darkMode}`}
    >
      <h1>PROJETOS</h1>
      <div className="projects-container-projects">
        <Carousel showThumbs={false}>
          {projectsData.map((project) => (
            <div
              key={project.name}
              className="projects-container-projects-box">
              <Image
                className={'projects-container-projects-box-img'}
                src={`/images/${project.thumbnail}.png`}
                alt={`Imagem do Projeto ${project.name}`}
                width="0"
                height="0"
                sizes="100vw"
                style={{ height: 'auto' }}
              />
              <div className="projects-container-projects-box-details">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className={`projects-container-projects-box-details-icons ${darkMode}`}>
                  {mapProjectIcons(project).map((tech) => (
                    <span key={tech.name}>
                      {tech.icon}
                      <small>{tech.name}</small>
                    </span>
                  ))}
                </div>
                <div className="projects-container-projects-box-details-button">
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
            </div>
          ))}
        </Carousel>
      </div>
    </section >
  );
}

export default Projects;