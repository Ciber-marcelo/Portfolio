import { HeroSection } from "@/components/hero-section";
import { KnownTechs } from "@/components/known-techs";
import { MainProjects } from "@/components/project-main";
import { WorkExperience } from "@/components/work-experience";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio | Home',
  description: 'Home do Portfolio do Marcelo',
}

export default function Home() { 
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <MainProjects />
      <WorkExperience />
    </>
  )
}
