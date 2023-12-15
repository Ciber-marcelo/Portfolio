import pokedex from '../projects-images/ProjectPokedex.svg'
import portfolio from '../projects-images/ProjectPortfolio.svg'
import blueLock from '../projects-images/ProjectBlueLock.svg'

export const projects = [
   {
      id: 1,
      image: portfolio,
      title: 'Portfólio',
      text: 'Portfólio é uma aplicação web utilizando Next e Tailwind, usando a API do Discord para o envio de formulários.',
      repo: 'https://github.com/Ciber-marcelo/portfolio',
      link: 'https://portfolio-marcelones.vercel.app/',
      technologies: [
         'Next.js', 
         'TypeScript', 
         'Tailwind.css',
         'Axios',
         'React-hook-form',
         'Framer-motion'
      ]
   },
   {
      id: 2,
      image: pokedex,
      title: 'Pokédex',
      text: 'Pokédex é uma aplicação web feita para simular uma pokédex dos jogos da franquia Pokémon, utilizando a PokéAPI para listar cada pokémon e suas principais informações dos jogos.',
      repo: 'https://github.com/Ciber-marcelo/Pokedex',
      link: 'https://pokedex-marcelones.vercel.app/',
      technologies: [
         'React.js', 
         'TypeScript', 
         'Styled-Components', 
         'Axios'
      ]
   },
   {
      id: 3,
      image: blueLock,
      title: 'Blue Lock',
      text: 'Blue Lock é uma aplicação web feita para listar as estatísticas dos personagens do manga Blue Block e criar formações de futebol utilizando os personagens.',
      repo: 'https://github.com/Ciber-marcelo/blue-lock',
      link: 'https://blue-lock-marcelones.vercel.app/',
      technologies: [
         'Next.js', 
         'TypeScript', 
         'Tailwind.css',
         'React-Apex-Charts',
         'Dnd-kit/core'
      ]
   },
];