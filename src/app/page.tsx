import { HeroSection } from "@/components/Hero-section";
import { KnownTechs } from "@/components/Known-techs";
import { MainProjects } from "@/components/Project-main";
import { WorkExperience } from "@/components/Work-experience";
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
