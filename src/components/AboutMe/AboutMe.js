import React from 'react'
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg"
import logoLinkedIn from "../../svg/linkedin.svg"
import logoYouTube from "../../svg/youtube.svg"

const AboutMe = () => {

    const socialNetworks = [
        {
            name: "Github",
            link:"https://github.com",
            logo: logoGithub
        },

        {
            name: "linkedin",
            link:"https://linkedin.com",
            logo: logoLinkedIn
        },

        {
            name: "youtube",
            link:"https://youtube.com",
            logo: logoYouTube
        }
    ];



  return (
    <S.ContainerAboutMe>
        <S.ContainerFlex>
            
            <S.ContainerText>
                <S.Title>
                    <p>Hola! Me llamo</p>
                    <p>Leonardo</p>
                    <p>Data Analyst</p>
                </S.Title>

                <S.DescriptionText>
                Ingeniero Comercial y administrador de empresas especializado en tecnologías de la información.
                Me apasiona crear soluciones financieras, comerciales y de operaciones usando técnicas avanzadas de 
                análisis de datos, inteligencia artificial, Blockchain y de desarrollo web
                </S.DescriptionText>

                <S.ContainerIcons>
                {socialNetworks.map((network, index) => (

                <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
                 >
                    <img src={network.logo} alt={network.name} />

                </a>
                ))}

                </S.ContainerIcons>
            </S.ContainerText>


            <S.ContainerImage>
                <img src="/img/photo4.png" alt="Leo C"></img>
            </S.ContainerImage>


        </S.ContainerFlex>
    </S.ContainerAboutMe>
  )
}

export default AboutMe