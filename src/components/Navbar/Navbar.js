import { useState } from 'react';
import React from 'react'
import * as S from "./Navbar.styles"

export const Navbar = () => {

const [showMenuBurguer, setShowMenuBurguer] = useState(false);


// añadiendole la funcionalidad al navbar
const clickItemNav = (item) => {
  document.getElementById(item).scrollIntoView({behavior: "smooth"})
};


  return (

    // importo el nombre de la constante en syle componentent
    <S.ContainerNavbar>
       <S.ContainerLogo>
        <S.ImageLogo src="/img/logo.png" alt="Logo Leo C" />
        <div>
          <h1>Leonardo Cervetto</h1>
          <h2>Business Intelligence Developer</h2>

        </div>

       </S.ContainerLogo>

        <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
          <S.BurguerMenu></S.BurguerMenu>
          <S.BurguerMenu></S.BurguerMenu>
          <S.BurguerMenu></S.BurguerMenu>

        </S.ContainerBurguer>



       <S.ContainerItems showMenuBurguer={showMenuBurguer}>
          <p onClick={() => clickItemNav("about-me")}>Sobre mi</p>
          <p onClick={() => clickItemNav("projects")}>Proyectos</p>
          <S.Button onClick={() => clickItemNav("contact")}>Contáctame</S.Button>
          
       </S.ContainerItems>

    </S.ContainerNavbar>
  )
}


