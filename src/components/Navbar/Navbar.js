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
          <h1>Leo C</h1>
          <h2>Developer</h2>

        </div>

       </S.ContainerLogo>

        <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
          <S.BurguerMenu></S.BurguerMenu>
          <S.BurguerMenu></S.BurguerMenu>
          <S.BurguerMenu></S.BurguerMenu>

        </S.ContainerBurguer>



       <S.ContainerItems showMenuBurguer={showMenuBurguer}>
          <p>About me</p>
          <p>Projects</p>
          <S.Button>Contact me</S.Button>
          
       </S.ContainerItems>

    </S.ContainerNavbar>
  )
}


