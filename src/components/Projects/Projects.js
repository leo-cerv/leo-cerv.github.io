import React from 'react'
import * as S from "./Projects.style";
import {projectsPortfolio} from "./ProjectsData";
import logogithub from "../../svg/github.svg"
import logowebsite from "../../svg/website.svg"

const Projects = () => {
  return (

    <S.ContainerProjects>
        <S.Title>Te comparto alguno de
             <span> <br /> mis proyectos</span></S.Title>  {/* el br es para hacer un salto de linea*/}
        
        <S.ContentProject>

            {projectsPortfolio.map((project, index) =>(
                <S.ProjectContent key={index}>

                    <S.TitleProject>{project.title}</S.TitleProject>

                    <S.ContainerImage>
                        <img src={project.image} alt={project.title} loazy="true"/>

                    </S.ContainerImage>

                    <S.ContainerTechs>
                        {project.techs.map((tech, index) => (

                            <div key={index}>
                                <img src={tech.src} alt={tech.name} />
                                <p>{tech.name}</p>

                            </div>
                        ))}

                    </S.ContainerTechs>

                    <S.Description>{project.description}</S.Description>

                    <S.ContainerFooter>
                        <p>Ver en:</p>
                        
                        {project.repository && (
                            <a href={project.repository} target="_blank" rel="noreferrer">

                                <img src={logogithub} alt={project.description}></img>

                            </a>
                        )}
                        {project.website && (
                            <a href={project.website} target="_blank" rel="noreferrer">

                            <img src={logowebsite} alt={project.description}></img>

                        </a>
                        )}

                    </S.ContainerFooter>

                </S.ProjectContent>

            ))}

        </S.ContentProject>


    </S.ContainerProjects>
  )
}

export default Projects