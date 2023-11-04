import { IntroductionSection } from "@/components/introduction-section";
import { AllProjects } from "@/components/project-all";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Portfólio | Projetos',
  description: 'Projetos do Portfolio do Marcelo',
}

export default function Projects() { 
  return (
    <>
      <IntroductionSection />
      <AllProjects />
    </>
  )
}