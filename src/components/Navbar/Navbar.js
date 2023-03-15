import { useState } from 'react';
import React from 'react'
import * as S from "./Navbar.styles"

export const Navbar = () => {

const [showMenuBurguer, setShowMenuBurguer] = useState(false);


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
          <p>Sobre mi</p>
          <p>Proyectos</p>
          <S.Button>Contáctame</S.Button>
          
       </S.ContainerItems>

    </S.ContainerNavbar>
  )
}


