import { IntroductionSection } from "@/components/Introduction-section";
import { AllProjects } from "@/components/Project-all";
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