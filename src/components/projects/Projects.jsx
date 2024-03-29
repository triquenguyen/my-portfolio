import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import PPP from '../../assets/projects/ppp.png'
import memgen from '../../assets/projects/memgen.png'
import sinkorswim from '../../assets/projects/sinkorswim.png'
import discordbot from '../../assets/projects/discordbot.png'
import pixeo from '../../assets/projects/Pixeo.png'
import { AnimatedTitle } from '../utils/AnimatedTitle.jsx'
import Reveal from '../utils/Reveal'

const Project = () => {
  const projects = [
    {
      name: "MemGEN",
      description: "A personal-customized intelligent cover letter creator using vector database, large language models and embeddings",
      photo: memgen,
      demo: "https://memgen.projects.art3m1s.me/",
      github: "https://github.com/triquenguyen/MemGen",
      stack: "Next.js, Auth0, Express, Firebase, Google Cloud, Milvus, Zilliz, OpenAI, Cohere"
    },
    {
      name: "Sink Or Swim",
      description: "A web app applied computer vision technology assists rice farmers in detecting diseases in their paddy crops",
      photo: sinkorswim,
      demo: "https://sinkorswim.vercel.app/",
      github: "https://github.com/triquenguyen/sink-or-swim",
      stack: "Next.js, Tailwind CSS, Framer Motion, TypeScript, Flask, TensorFlow"
    },
    {
      name: "Paddy Plant Prognosis",
      description: "A web app applied computer vision technology assists rice farmers in detecting diseases in their paddy crops",
      photo: PPP,
      demo: "https://www.paddyplantprognosis.tech/",
      github: "https://github.com/triquenguyen/PaddyPlantPrognosis",
      stack: "React, Vite, Tailwind CSS, Flask, TensorFlow"
    },
    {
      name: "LeetCode Discord Bot",
      description: "A Discord Bot that challenges 1900+ SJSU students to compete in solving daily random LeetCode problems",
      photo: discordbot,
      demo: "https://discord.com/oauth2/authorize?client_id=932270316867186729&permissions=314368&scope=bot",
      github: "https://github.com/triquenguyen/LeetCode-Bot",
      stack: "Python, GraphQL, Discord API"
    },
    {
      name: "Pixeo",
      description: "A social media platform designed exclusively for digital artists to showcase their incredible talent and connect with a vibrant community of art enthusiasts",
      photo: pixeo,
      demo: "https://sinkorswim.vercel.app/",
      github: "https://github.com/triquenguyen/pixeo",
      stack: "Next.js, Redux, MySQL, Tailwind CSS, NextAuth, Framer Motion"
    }
  ]

  return (
    <section id="projects" className='flex flex-col gap-6 md:gap-16 md:mb-32 mx-16 md:mx-24 mt-6 md:mt-0'>
      <AnimatedTitle>Projects</AnimatedTitle>
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <Reveal>
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              photo={project.photo}
              demo={project.demo}
              github={project.github}
              stack={project.stack}
            />
          </Reveal>

        ))}
      </div>
    </section>
  )
}

export default Project