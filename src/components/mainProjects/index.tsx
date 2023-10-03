import { HorizontalDivider } from "../horizontalDivider";
import { ProjectCard } from "../projectCard";
import { SectionTitle } from "../sectionTitle";
import { projects } from './projects'

export function MainProjects() {
   return (
      <div className="container py-10">
         <SectionTitle title='Projetos em destaque' subTitle='destaques' />
         <HorizontalDivider />
         {projects.map((item) => (
            <ProjectCard 
               key={item.id}
               image={item.image}
               title={item.title}
               text={item.text}
               link={item.link}
               technologies={item.technologies}
            />
         ))}
      </div>
   )
}