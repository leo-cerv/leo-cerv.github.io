import React from 'react'
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg"
import logoLinkedIn from "../../svg/linkedin.svg"
import logoYouTube from "../../svg/youtube.svg"

const AboutMe = () => {

    const socialNetworks = [
        {
            name: "Github",
            link:"https://github.com/leo-cerv",
            logo: logoGithub
        },

        {
            name: "linkedin",
            link:"https://www.linkedin.com/in/leo-cerv/",
            logo: logoLinkedIn
        },

        {
            name: "youtube",
            link:"https://youtube.com",
            logo: logoYouTube
        }
    ];



  return (
    <S.ContainerAboutMe id="about-me">
        <S.ContainerFlex>
            
            <S.ContainerText>
                <S.Title>
                    <p>¡Hola! </p>
                    <p>Bienvenido</p>
                </S.Title>

                <S.DescriptionText>
                Mi nombre es Leonardo, de profesión soy Ingeniero Comercial y administrador de empresas con mención en finanzas,
                también tengo un título técnico en administración de hoteles y restaurantes.
                <br></br>
                 Tengo más de 5 años de experiencia trabajando en la industria de servicios, financiera y consultorias. El último tiempo lo he dedicado a la especialización en tecnologías de la información.
                <br></br>
                Mi pasión es crear soluciones tecnológicas en áreas financieras, comerciales y de operaciones usando técnicas avanzadas de 
                análisis de datos, inteligencia artificial, blockchain y de desarrollo web.
                <br></br>
                <br></br>
                <b>Lenguajes: </b> R, Python, Solidity, JavaScript, HTML5, CSS3, SQL y NoSQL

                <br></br>
                <br></br>
                <b>Skills: </b>Analitica y visualización avanzada de datos, modelado predictivo, machine learning, blockchain, marketing digital, estandarización, estrategias comerciales, gestión gastronómica, finanzas e inversiones.

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
                <img src="/img/photo5.png" alt="Leo C"></img>
            </S.ContainerImage>


        </S.ContainerFlex>
    </S.ContainerAboutMe>
  )
}

export default AboutMe