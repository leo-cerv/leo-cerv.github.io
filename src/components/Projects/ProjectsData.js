
import ingmenu from "../../images/projects/ing_menu.png"
import rlogo from "../../images/techs/Rlogo.png"
import flexlogo from "../../images/techs/flexdashboard.png"
import css3logo from "../../images/techs/css.png"

import criptodash from "../../images/projects/cryptodash.png"
import modeltimelogo from "../../images/techs/logo-modeltime.png"

import portfoliodash from "../../images/projects/Portafoliodash.png"
import shinylogo from "../../images/techs/shiny_logo.png"
import tidyquantlogo from "../../images/techs/tidyquant.png"

import twitterdash from "../../images/projects/Twitterapp.png"
import tidylogo from "../../images/techs/tidyverse-logo.png"

import tokenapp from "../../images/projects/Token.png"
import soliditylogo from "../../images/techs/solidity.png"
import jslogo from "../../images/techs/javscript.png"




export const projectsPortfolio = [
  {
    title: "Ingenieria de Menú con R",
    image: ingmenu,
    techs: [
      { name: "R", src: rlogo },
      { name: "FlexDashboard", src: flexlogo },
      { name: "CSS3", src: css3logo },
    ],
    description:
      "Aplicación web para restaurantes que ayuda a definir estrategias comerciales y precios de los platos en carta. Incluye sistema de recomendaciónes.",
    repository: "https://github.com/ratasi/rick-morty/",
    website: "#!",
  },
  {
    title: "Cryptocurrency price predictor",
    image: criptodash,
    techs: [
      { name: "R", src: rlogo },
      { name: "ModelTime", src: modeltimelogo },
    ],
    description:
      "Aplicación que predice el precio de las criptomonedas utilizando inteligencia artificial. Incluye un panel interactivo de indicadores de tendencia.",
    repository: "https://github.com/ratasi/todolist-udemy",
    website: "#!",
  },
  {
    title: "Smart Financial Portafolio",
    image: portfoliodash,
    techs: [
      { name: "R", src: rlogo },
      { name: "Shiny", src: shinylogo },
      { name: "Tidyquant", src: tidyquantlogo },
    ],
    description:
      "Aplicación que ayuda a definir el peso de cada activo en una cartera de inversión tomando como base la estrategia definida por el usuario.",
    repository: "https://github.com/ratasi/simpson-phrases",
    website: "#!",
  },
  {
    title: "Twitter Mining",
    image: twitterdash,
    techs: [
      { name: "R", src: rlogo },
      { name: "Shiny", src: shinylogo },
      { name: "Tidyverse", src: tidylogo }
    ],
    description:
      "Aplicación que analiza tweets en tiempo real usando técnicas de minería de texto. Ayuda a definir palabras más usadas para potenciar el posicionamiento web. Incluye algoritmo de análisis de sentimientos.",
    repository: "https://github.com/ratasi/marvel-react",
    website: "#!",
  },

  {
    title: "Crypto Gasto",
    image: tokenapp,
    techs: [
      { name: "Solidity", src: soliditylogo },
      { name: "JavaScript", src: jslogo },
    ],
    description:
      "medio de pago en modelo de dos partes (P2P) desarrollado con contratos inteligentes que procesan la compra y venta de tokens para el pago de servicios, en este caso, gastronómicos. Programado con Solidity.",
    repository: "https://github.com/ratasi/dynamic-form-project",
    website: "#!",
  }
  
];