import { HeroSection } from "@/components/hero-section";
import { KnownTechs } from "@/components/known-techs";
import { MainProjects } from "@/components/main-projects";
import { WorkExperience } from "@/components/work-experience";

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
